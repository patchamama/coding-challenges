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
      const languages = []
      const exercises = []

      for (const subFile of subFiles) {
        const subFilePath = path.join(filePath, subFile)

        if (fs.statSync(subFilePath).isDirectory()) {
          languages.push(subFile)
        } else {
          exercises.push(subFile)
        }
      }

      if (languages.length > 0) {
        result[file] = { languages, exercises }
      }
    }
  }

  return result
}

function generateMarkdownTable(exercismInfo) {
  let markdown = '| Exercise |'
  for (const language in exercismInfo) {
    markdown += ` ${language} |`
  }
  markdown += '\n| --- |'
  for (let i = 0; i < Object.keys(exercismInfo).length; i++) {
    markdown += ' --- |'
  }
  markdown += '\n'

  const exercises = Object.values(exercismInfo)[0].exercises
  for (const exercise of exercises) {
    markdown += `| ${exercise} |`
    for (const language in exercismInfo) {
      const languagePath = path.join('exercism', language, exercise)
      const link = fs.existsSync(languagePath)
        ? `[Link](./${language}/${exercise})`
        : '-'
      markdown += ` ${link} |`
    }
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
