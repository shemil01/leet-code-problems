var isPalindrome = function(x) {
    const str=String(x)
     return str === str.split('').reverse().join('');
     
 };