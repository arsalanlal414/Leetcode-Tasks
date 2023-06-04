/**
 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

 

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length <=1) return false
    let starters = []

    for(let i in s){
        if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
            starters.push(s[i])
        }
        else{
            if(s[i] === ")" && starters[starters.length-1] !== "(" || s[i] === "]" && starters[starters.length-1] !== "[" || s[i] === "}" && starters[starters.length-1] !== "{"){
                return false
            }
            starters.pop()
        }
        
    }
    return starters.length === 0
};