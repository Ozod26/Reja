console.log("saved changes to develop branch") 


function countDigits(str) {
  
  const digitRegex = /\d/g;

  const digitMatches = str.match(digitRegex);
  if (!digitMatches) {
    return 0;
  }
  return digitMatches.length;
}

const exampleString = "ad2a54y79we35t0sfgb9";
const digitCount = countDigits(exampleString);

console.log("The count of digits is", digitCount);