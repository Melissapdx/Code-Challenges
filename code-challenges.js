//Given a string, return True or False depending on whether that string 
//has balanced parentheses.

function balancedParens(phrase){
    var parens = 0;

    for( var i = 0; i < phrase.length; i++){
        paren = phrase[i];
        if(paren === "("){
            parens = parens + 1;
        } else if( paren === ")"){
            parens = parens -1;
        }
        if(parens < 0){
            return false;
        }
    }
    if (parens > 0) {
        return false;
    } else {
        return true;
    }

}
console.log(balancedParens("()"));
console.log(balancedParens("("));
console.log(balancedParens("(This has (too many closes.) ) )"));

// Write a method palindrome_chain_length which takes a positive number and 
//returns the number of special steps needed to obtain a palindrome. 
//The special step is: "reverse the digits, and add to the original number". 
//If the resulting number is not a palindrome, repeat the procedure with the sum 
//until the resulting number is a palindrome.

var palindromeChainLength = function(n,steps) {
    var numReverse = n.toString().split('').reverse().join('');
    var strToNum = parseInt(numReverse);
    
    if(steps === undefined){
        steps = 0;
    }
 
    if(isPalindrome(n) === true){
        return steps;
    } else {
        steps += 1;
        var numToCheck = n + strToNum;
      return palindromeChainLength(numToCheck,steps);
    }


};

var isPalindrome = function(num) {
    var nums = num.toString().split('');
    var numCounts = {};
    var seenOdd = 0;
    
    for( var i = 0; i<nums.length;i++){
        var n = nums[i];
        if(!(n in numCounts)) {
          numCounts[n] = 1;
        } else {
          numCounts[n]+=1;
        }
    }
    for(var key in numCounts){
        var values = numCounts[key]
        if(values % 2 !== 0){
          seenOdd += 1;
        }
    }
    if(seenOdd === 0 || seenOdd === 1){
      return true;
    } else {
      return false;
    }
}
//Write a function that will calclulate a factorial
//!3 = 6(3*2*1)

function factorial(n){
    if(n === 0){
        return 1;
    }
    return n * factorial(n-1);
}
console.log(factorial(3));
console.log(factorial(10));
//Write a function that will return the count of distinct case-insensitive 
//alphabetic characters and numeric digits that occur more than once in the input 
//string. The input string can be assumed to contain only alphabets 
//(both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
    text = text.toLowerCase();
    var duplicates = 0;
    var letterCount = {};
    //Count letters 
    for( var i = 0; i < text.length; i++){
      var letter = text[i];
      if(!(letter in letterCount)){
        letterCount[letter] = 1;
      } else {
        letterCount[letter] +=1;
      }
    }
    //if letter account occurs more than once it's a duplicate and added to dupe count
    for(var letter in letterCount){
      var count = letterCount[letter];
    if(count > 1){
      duplicates +=1;
      } 
    }
    return duplicates;
}

//Finding highest and lowest numbers in string, using max and min
function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number);
    var min = Math.min.apply(null,numbers);
    var max = Math.max.apply(null,numbers);
    
    return max + ' ' + min;
}
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
//Anagram of Palindrome
//A palindrome is a word that reads the same forward and backwards 
//(eg, “racecar”, “tacocat”). An anagram is a rescrambling of a word (
//eg for “racecar”, you could rescramble this as “arceace”).
//Determine if the given word is a re-scrambling of a palindrome.
//The word will only contain lowercase letters, a-z
function isAnagramOfPalindrome(word) {

    var letters = word.split('');
    var seenLetters = {};

    for(var i = 0; i < letters.length; i++){
        var letter = letters[i];
        if(!(letter in seenLetters)) {
            seenLetters[letter] = 1;
        } else {
           seenLetters[letter] += 1;
        }
    }

    //word is a plaindrome if number of letter odd-counts is 0 or 1
    var seenOddLetter = false;
    var values = Object.values(seenLetters);
    for(var j = 0; j < values.length; j ++){
        var count = values[j];
        if(count % 2!== 0) {
            if(seenOddLetter) {
                return false;
            }
            var seenOddLetter = true;
        }

    }
    return true;
}
console.log(isAnagramOfPalindrome("a"));
console.log(isAnagramOfPalindrome("arceace"));
console.log(isAnagramOfPalindrome("arceaceb"));


//Return number of items in a array, using recursion
function countRecursively(arr) {
    if (!(0 in arr)){
        return 0;
    }
    return countRecursively(arr.slice(1)) + 1;
}
console.log(countRecursively([]));
console.log(countRecursively([1,2,3]));
console.log(countRecursively([3,5,6,7]));

//Given int, print digits in reverse order,starting with ones in place
function printDigits(num){
    while(num){
        next_digit = num % 10;
        num = (num - next_digit)/10;
    }
}


