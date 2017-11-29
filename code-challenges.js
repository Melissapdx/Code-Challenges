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
        if(count % 2!= 0) {
            if(seenOddLetter) {
                return false;
            }
            var seenOddLetter = true;
        }

    }
    return true;
}