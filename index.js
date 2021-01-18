const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newArray = tutorials.map(splitWords)
  return newArray
}

const splitWords = (splitWords) => {
  let words = splitWords.split(" ")
  let capitalizedWords = words.map(capitalize)
  return capitalizedWords.join(' ')
}

const capitalize = (word) => {
  let capWord =  word.charAt(0).toUpperCase() + word.slice(1)
  return capWord
}