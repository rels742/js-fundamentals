// This function should return true if the passed string is equal to "Hello"

const { e } = require('../loops/for-loop-and-arrays')

function isHello(greeting) {
  // TODO: write code in this function body to pass the tests
  if (greeting === 'Hello') {
    return true
  } else {
    return false
  }
}

// This function should return true if the passed string is not equal to "Hello"
// const notHello = true;
function isNotHello(val1) {
  // TODO: write code in this function body to pass the tests
  if (val1 !== 'Hello') {
    return true
  } else {
    return false
  }
}

// This function should return true if the string val1 is is longer
// than string val2
function isLongerThan(val1, val2) {
  // TODO: write code in this function body to pass the tests
  if (val1.length > val2.length) {
    return true
  } else {
    return false
  }
}
isLongerThan('Mike', 'Ed')

// This function should return true if the string passed in the function's first
// argument has an odd number of vowels
const vowels = ['a', 'e', 'i', 'o', 'u']

function hasOddNumberVowels(val1) {
  // TODO: write code in this function body to pass the tests
  // let count = 0
  // for (let i = 0; i < val1.length; i++) {
  //   if (val1.includes(vowels)) {
  //     count++
  //   }
  // }
  // // for (let i = val1.length; (i = 0); i++) {
  // //   if (val1.includes(vowels)) {
  // //     count++
  // //   }
  // // }
  // if (count % 2 !== 0) {
  //   return val1 === true
  // } else {
  //   return val1 === false
  // }
}

// console.log('this is the count for mo', count)

// this function should return the middle character of a string if it has an odd number
// of characters. If there are an even number of characters the function should return
// the middle two letters

function getMiddleLetter(val1) {
  // TODO: write code in this function body to pass the tests
}

// This function should return the name of the season for the provided
// month name. For example, "January" should return "Winter". If the provided
// value is not a valid month, an empty string ("") should be returned. Use
// the below ranges for each season:
//
// Spring - March to May
// Summer - June to August
// Autumn - September to November
// Winter - December to February
function seasonForMonth(monthName) {
  // TODO: write code in this function body to pass the tests

  if (monthName === 'March' || monthName === 'April ' || monthName === 'May') {
    return 'Spring'
  } else if (
    monthName === 'June' ||
    monthName === 'July' ||
    monthName === 'August'
  ) {
    return 'Summer'
  } else if (
    monthName === 'September' ||
    monthName === 'October' ||
    monthName === 'November'
  ) {
    return 'Autumn'
  } else if (
    monthName === 'December' ||
    monthName === 'January' ||
    monthName === 'February'
  ) {
    return 'Winter'
  } else {
    return ''
  }
}

module.exports = {
  a: isHello,
  b: isNotHello,
  c: isLongerThan,
  d: hasOddNumberVowels,
  e: getMiddleLetter,
  f: seasonForMonth
}
