function isPalindrome(word) {
	// Write your algorithm here
	for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
		const endIndex = word.length - 1 - startIndex;
		//compare firstletter with last letter
		if (word[startIndex] !== word[endIndex]) {
			return false;
		}
	}

	return true;
}

/* 
  Add your pseudocode here
  1. create a variable called startIndex and set it to 0
  2. create a variable called endIndex and set it to the length of the word - 1 -startIndex
  3. loop through the word from startIndex to half the length of the word
  4. compare the first letter with the last letter
  5. if the first letter is not equal to the last letter, return false
  6. return true
*/

/*
  Add written explanation of your solution here
  A palindrome is a word or phrase that is the same whether you read it forward or backward.
  I check the first letter with the last letter and if they are equal, I check the second letter with the second to last letter and so on.
  If all the letters are equal, then the word is a palindrome.
  If any of the checks is not true, break loop and return false.
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
