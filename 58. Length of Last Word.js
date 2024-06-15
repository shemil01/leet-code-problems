/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Trim any trailing spaces from the string
    s = s.trim();
    
    // Split the string by spaces into an array of words
    const words = s.split(' ');
    
    // Get the last word from the array
    const lastWord = words[words.length - 1];
    
    // Return the length of the last word
    return lastWord.length;
};
