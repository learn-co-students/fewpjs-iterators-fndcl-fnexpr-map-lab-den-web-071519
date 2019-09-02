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
  let cappedTutorials = tutorials.map(capped)
  return cappedTutorials
}

function capped(sentence){
  let capSent = sentence.split(' ').map(function(word) {
    let letter = word.charAt(0).toUpperCase()
    sentence = letter + word.substring(1)
    return sentence
  } ).join(' ')
  return capSent
}
