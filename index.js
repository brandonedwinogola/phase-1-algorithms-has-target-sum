function reverse(word) {
    // "abc" == "cba"
    const wordArray = word.split("")
    const reversedWordArray = wordArray.reversed()
    const reversedword = reversedwordArray.join("")
    return reversedWord
}

function hasTargetSum(array, target) {
    // Write your algorithm here
    // take one item from the array
    const reversedWord = reverse(word)

    // check if it's the integer we're looking for
    if (word === reversedWord) {
        return true
    } else {
        return false
    }
}

/* 
  Write the Big O time complexity of your function here
fuction sum(num1, num2) {
  return num1 + num2;
}
*/

/* 
  Add your pseudocode here
  
  take one item from the array
  check if it's the integer we're looking for
  if it is
     take the integer
  otherwise, keep looking

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;