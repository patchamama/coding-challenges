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

const exercismDirectory = './exercism' // Replace with the path to your Exercism directory
const outputFilePath = 'exercism_info.json'

const exercismInfo = scanDirectory(exercismDirectory)
fs.writeFileSync(outputFilePath, JSON.stringify(exercismInfo, null, 2))

console.log(`JSON file generated at ${outputFilePath}`)
