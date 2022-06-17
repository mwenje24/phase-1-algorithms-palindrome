function isPalindrome(word) {
  // Write your algorithm here
  for(let i = 0; i < word.length /2 ; i++){
    // console.log(word[i] === word[word.length - 1 - i]? true: false);
    if(word[i] === word[word.length - 1 - i]){
      return true
    }
    else{
      return false
    }
  }
}

/* 
  Add your pseudocode here
  1. find the length of the word
  2. use a for loop to iterate through half of the word
  3. use an if statement to first half corresponds to the last half pf the word
  4. return true if the palindrome test passes and false if it fails
*/

/*
  Add written explanation of your solution here
  we need to find a balance of the word by halfing its length and then we loop
  through the first half from the beginning and the last half from the end
  if the strict equality operator returns true then the word has passed the
  palindrome test otherwise the result is false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
