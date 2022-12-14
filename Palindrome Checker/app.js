// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

function palindrome(str) {
    let arr = str.replace(/[-.,_*+?^${}()|[\]\\]/g,'').toLowerCase().split(' ').join('').split('');
    let reverseArr = [...arr].reverse();
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] !== reverseArr[i]) {
        return false;
      }
    }
    return true;
  }
  
  palindrome("eye");