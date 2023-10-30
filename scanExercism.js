const fs = require('fs')
const path = require('path')

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

function generateMarkdownTable(exercismInfo) {
  let markdown
  let language
  const totalLang = {
    delphi: 76,
    javascript: 141,
    php: 96,
    python: 138,
    typescript: 138,
  }

  markdown = '| Source | Language | Exercises |\n'
  markdown += '| --- | --- | --- |\n'
  markdown += '| [Exercism](https://exercism.org/tracks) |   |   |\n'

  let count = 0
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
    markdown += `| | [${language}](https://exercism.org/tracks/${language}) | [${count}](./exercism/${language})/${total} |\n`
  }

  markdown += '\n\n## Exercism solutions\n\n'
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
      const link = fs.existsSync(languagePath)
        ? `[x](./exercism/${language}/${exercise})[*](https://exercism.org/tracks/${language}/exercises/${exercise})`
        : `[*](https://exercism.org/tracks/${language}/exercises/${exercise})`
      markdown += ` ${link} |`
      count += link.includes('[x]') ? 1 : 0
    }
    markdown += ` ${count} |`
    markdown += '\n'
  }

  return markdown
}

const exercismDirectory = './exercism' // Replace with the path to your Exercism directory
const outputJsonPath = 'exercism_info.json'
const outputMarkdownPath = 'exercism_info.md'

const exercismInfo = scanDirectory(exercismDirectory)
fs.writeFileSync(outputJsonPath, JSON.stringify(exercismInfo, null, 2))

const markdownTable = generateMarkdownTable(exercismInfo)
fs.writeFileSync(outputMarkdownPath, markdownTable)

console.log(`JSON file generated at ${outputJsonPath}`)
console.log(`Markdown file generated at ${outputMarkdownPath}`)
