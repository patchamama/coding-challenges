const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

const extension = {
  delphi: '.dpr',
  javascript: '.js',
  php: '.php',
  python: '.py',
  typescript: '.ts',
}

// Source of exercises
const source = process.argv[2] || 'exercism'

function scanDirectory(directoryPath) {
  const result = {}

  const files = fs.readdirSync(directoryPath)

  for (const file of files) {
    const filePath = path.join(directoryPath, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      const subFiles = fs.readdirSync(filePath)
      const exercises = []
      const others = []

      for (const subFile of subFiles) {
        const subFilePath = path.join(filePath, subFile)

        if (fs.statSync(subFilePath).isDirectory()) {
          exercises.push(subFile)
        } else {
          others.push(subFile)
        }
      }

      if (exercises.length > 0) {
        result[file] = { exercises, others }
      }
    }
  }

  return result
}

function exerciseExist(languagePath, language, exercise) {
  let url = `https://raw.githubusercontent.com/exercism/${language}/main/exercises/practice/${exercise}/${exercise}${extension[language]}`
  let fileNotFound = languagePath + '_notExist'
  // exec(`rm ${fileNotFound}`)

  // return true

  if (fs.existsSync(fileNotFound)) {
    return false
  }

  destinationFile = 'tmp.txt'
  return new Promise((resolve, reject) => {
    // Execute the wget command to download the file.
    // console.log(url)
    exec(`wget -O ${destinationFile} ${url}`, (error) => {
      exec(`rm ${destinationFile}`)
      if (error) {
        // There was an error running the wget command, so the file doesn't exist.
        //console.log('Error: ', error)
        // console.log('Not exist:', url, ' file created:', fileNotFound)
        let capitalizeExercise =
          exercise.charAt(0).toUpperCase() +
          exercise.slice(1).toLowerCase().replace('-', '')
        let url =
          language === 'delphi'
            ? `https://raw.githubusercontent.com/exercism/${language}/main/exercises/practice/${exercise}/${capitalizeExercise}${extension[language]}`
            : `https://raw.githubusercontent.com/exercism/${language}/main/exercises/practice/${exercise}/${capitalizeExercise}${extension[language]}`

        exec(`wget -O ${destinationFile} ${url}`, (error1) => {
          exec(`rm ${destinationFile}`)
          if (error1) {
            fs.writeFile(fileNotFound, '', (error) => {})
            resolve(false)
          } else {
            resolve(true)
          }
        })
      } else {
        resolve(true)
      }
      // else {
      //   // Check if the file exists in the file system.
      //   fs.access(destinationFile, fs.constants.F_OK, (err) => {
      //     if (err) {
      //       // The file does not exist.
      //       console.log('Not exist2:', url, fileNotFound)
      //       resolve(false)
      //     } else {
      //       // The file exists.
      //       exec(`rm LICENSE`)
      //       resolve(true)
      //     }
      //   })
      // }
    })
  })
}

function generateMarkdownTable(exercismInfo) {
  let markdown = ''
  let language
  const totalLang = {
    delphi: 76,
    javascript: 141,
    php: 96,
    python: 139,
    typescript: 95,
  }

  markdown += `## [${
    source.charAt(0).toUpperCase() + source.slice(1)
  }](https://${source}.org/tracks)\n\n`

  markdown += '| Language | Exercises |\n'
  markdown += '|  --- | --- |\n'

  let count = 0
  let countTotal = 0
  let countGlobal = 0
  let percent = 0
  let totalExercises = []
  for (let i = 0; i < Object.keys(exercismInfo).length; i++) {
    count = 0
    for (const exercise of Object.values(exercismInfo)[i].exercises) {
      count++
      if (!totalExercises.includes(exercise)) {
        totalExercises.push(exercise)
      }
    }
    language = Object.keys(exercismInfo)[i]
    let total = totalLang[language]
    markdown += `| [${language}](https://exercism.org/tracks/${language}) | [${count}](./exercism/${language})/${total} |\n`
    countTotal += count
    countGlobal += total
  }
  percent = (countTotal * 100) / countGlobal

  markdown += `| |${countTotal}/${countGlobal} (${percent.toFixed(2)}%)`

  // -------------
  countTotal = 0
  markdown += `\n\n## Solutions\n\n`
  markdown += '| Exercise |'
  for (const language in exercismInfo) {
    markdown += ` ${language} |`
  }
  markdown += ' COUNT |'
  markdown += '\n| --- |'
  for (let i = 0; i < Object.keys(exercismInfo).length; i++) {
    markdown += ' --- |'
  }
  markdown += ' --- |'
  markdown += '\n'

  // Sort the totalExercises array in alphabetical order
  totalExercises.sort()

  //   const exercises = Object.values(exercismInfo)[0].exercises
  for (const exercise of totalExercises) {
    markdown += `| ${exercise} |`
    count = 0
    for (const language in exercismInfo) {
      const languagePath = path.join('exercism', language, exercise)
      exerciseExist(languagePath, language, exercise)
      let fileNotFound = languagePath + '_notExist'

      const link = fs.existsSync(languagePath)
        ? `[x](./exercism/${language}/${exercise})[*](https://exercism.org/tracks/${language}/exercises/${exercise})`
        : !fs.existsSync(fileNotFound)
        ? `[*](https://exercism.org/tracks/${language}/exercises/${exercise})`
        : `[-](https://exercism.org/tracks/${language}/exercises/${exercise})`
      markdown += ` ${link} |`
      count += link.includes('[x]') ? 1 : 0
    }
    countTotal += count
    markdown += ` ${count} |`
    markdown += '\n'
  }
  markdown += '|  |'
  for (let i = 0; i < Object.keys(exercismInfo).length; i++) {
    markdown += '  |'
  }
  markdown += `  ${countTotal} |`
  markdown += '\n'

  return markdown
}

const Directory = `./${source}` // Replace with the path to your Exercism directory
const outputJsonPath = `${source}_info.json`
const outputMarkdownPath = `${source}_info.md`

const Info = scanDirectory(Directory)
fs.writeFileSync(outputJsonPath, JSON.stringify(Info, null, 2))

const markdownTable = generateMarkdownTable(Info)
fs.writeFileSync(outputMarkdownPath, markdownTable)

console.log(`JSON file generated at ${outputJsonPath}`)
console.log(`Markdown file generated at ${outputMarkdownPath}`)
