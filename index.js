const fs = require('fs')
const translateSubs = require('./translate-subs')

const thisFile = process.argv[1]
const subsFile = process.argv[2]
const outputFile = process.argv[3]

const getFileName = (absoluteFilePath) => {
  const isWindows = /^win/.test(process.platform)
  const windowsFileRegex = /\\([^\\]+)$/
  const otherFileRegex = /\/([^\/]+)$/
  return absoluteFilePath.match(isWindows ? windowsFileRegex : otherFileRegex)[1]
}

const thisFileName = getFileName(thisFile)

if (typeof subsFile !== 'string') {
  console.error(
`Specify a file that exports subs that needs to be translated.

    Call this file like this:
    node ${thisFileName} <filename> <output-file>

    Where <filename> is a .js file that exports an array of objects that have time and text keys, for example:
        modules.exports = [{time: 0, text: '今日'}, {time: 4: text: '私'}]
`
  )
  return
}

const subsFileName = getFileName(subsFile)

if (typeof outputFile !== 'string') {
  console.error(
`Specify an output file for the translated subs to go.

    Call this file like this:
    node ${thisFileName} ${subsFileName} <output-file>

    Where <output-file> is the name of the file that you want the translated output to be saved.
`
  )
  return
}

const translatedSubs = translateSubs(fs.readFileSync(subsFile))
fs.writeFileSync(JSON.stringify(translatedSubs), outputFile)

console.log(`Successfully translated subs to ${outputFileName}.`)
