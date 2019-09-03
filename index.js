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
  const upperCaseArray = []

  tutorials.map(str => {
    let splitStr = str.split(" ")
    let currentString = ""
    splitStr.forEach(word => {
      const firstLetter = word.charAt(0).toUpperCase()
      currentString += `${firstLetter}${word.slice(1)} `
    })
    upperCaseArray.push(currentString.trim())
  })

  return upperCaseArray
}