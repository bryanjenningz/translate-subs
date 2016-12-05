const japaneseDictionary = require('./japanese-dictionary')
const kanjiDictionary = require('./kanji-dictionary')

// Dict (String -> String | [String])
const dictionary = Object.assign({}, {kanjiDictionary, japaneseDictionary})

module.exports = dictionary
