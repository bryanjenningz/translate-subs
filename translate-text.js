const dictionary = require('./dictionary')

// type Translation = {word : String, translation : String | [String]}

// translateText : String -> [Translation | String]
const translateText = text => {
  const translations = []

  for (let start = 0; start < text.length;) {
    let wordLength = 10
    for (; wordLength > 0; wordLength--) {
      const word = text.slice(start, start + wordLength)
      const translation = dictionary[word]
      if (translation) {
        translations.push({word, translation})
        break
      }
    }

    if (wordLength > 0) {
      start += wordLength
    } else {
      translations.push(text[start])
      start += 1
    }
  } 

  return translations
}

module.exports = translateText
