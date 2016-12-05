const translateText = require('./translate-text')

// type Sub = {time : Float, text : String}
// type SubTranslation = {time : Float, translations : [Translation | String]}
 
// translateSub : Sub -> SubTranslation
const translateSub = (sub) => ({
  time: sub.time,
  translations: translateText(sub.text)
})

// translateSubs : [Sub] -> [SubTranslation]
const translateSubs = (subs) => subs.map(translateSub)

module.exports = translateSubs
