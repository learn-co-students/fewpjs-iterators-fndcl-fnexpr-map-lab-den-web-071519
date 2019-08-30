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

//they demand I use a function called "titleCased", takes no parameters
const titleCased = () => {

  // map through the tutorials object, explicitly return the result
  return tutorials.map(function(tutorial){

    //split each sentence into its component words (tutorial === the 'sentence')
    let eachWord = tutorial.split(" ")

    // iterate through each word of the sentence
    let capitalized = eachWord.map(function(word){

        // return (*** otherwise it won't work) the capitalized string
        return word[0].toUpperCase() + word.slice(1);
    })

    // return those individually capitalized words joined with space between
    return capitalized.join(" ")

  })

}
//the tests fail, but I'm getting what I want in the console.
