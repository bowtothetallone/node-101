const fs = require('fs')

const currentFolderContents = fs.readdirSync('.')
console.log('What is in this folder?', currentFolderContents)

const textFilePath = './fancy_text.txt'
const textFileContents = fs.readFileSync(textFilePath, 'utf-8')
console.log('What is in my text file?', textFileContents)

const dataFilePath = './data.json'
const dataFileContents = fs.readFileSync(dataFilePath, 'utf-8')
const dataFileContentsParsed = JSON.parse(dataFileContents)

// console.log('What text is in my data file?', dataFileContents)
// console.log('What is the parsed result of my data file?', dataFileContentsParsed)

const catIndex = Math.floor(Math.random() * dataFileContentsParsed.length)
const currentCat = dataFileContentsParsed[catIndex]
console.log('What is this cat named?', currentCat.name)
console.log('This cat is ' + currentCat.age + ' years old.')
