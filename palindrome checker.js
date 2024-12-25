// Task 2: Palindrome Checker
function isPalindrome(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); 
    if (s.length <= 1) {
        return true;
    }
    if (s[0] !== s[s.length - 1]) {
        return false;
    }
    return isPalindrome(s.slice(1, -1));
}