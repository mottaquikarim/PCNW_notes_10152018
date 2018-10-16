/* 1
    @func makeEven
    @param {string} str
    @returns {string}
    @desc - if the input string is odd number of characters, 
            add a "#" to make it even number of characters
            otherwise return string
    @example - makeEven('taq');  // 'taq#'
    @example - makeEven('john'); // 'john'
*/

const makeEven = str => {
    // str = "odd"
    //  store number of characters in str
    const numChars = str.length; // numChars = 3

    // check if number of characters is even
    if (numChars % 2 === 0) { // 3 % 2 === 0; 1 === 0; => false
        return str; // #IGNORED
    }


    // add # IF above is false
    return str + "#"; // "odd" + "#" => "odd#"
}

console.log("### makeEven ###")
console.log(makeEven('hello')) // this is a sample str
console.log(makeEven('odd')) // odd#
console.log(makeEven('even')) // even

/*
    @func getLastChar
    @param {string} str
    @returns {string}
    @desc - return the last character in string
    @example - getLastChar('taq'); // 'q'
*/

const getLastChar = str => {
    const lastChar = str.charAt(str.length - 1);
    return lastChar;
}

// const getLastChar = str => str.charAt(str.length-1)
console.log("### getLastChar ###")
console.log(getLastChar('taq'))

/* 3
    @func get3rdChar
    @param {string} str
    @returns {string}
    @desc - return the third character in string
    @example - get3rdChar('taq'); // 'q'
    @example - get3rdChar('mo'); // 'not enough characters!'
*/
const get3rdChar = str => {
    if (str.length < 3) {
        return "not enough characters";
    }

    return str.charAt(2);
}

// const get3rdChar = str => str.length < 3 ? 'not enough characters' : str.charAt(2);

console.log("### get3rdChar ###")
console.log(get3rdChar('taq')) // q
console.log(get3rdChar('mo')) // not enough characters

/* 4
    @func get3rdCharFromEnd
    @param {string} str
    @returns {string}
    @desc - return the third character _FROM THE END_ in string
    @example - get3rdCharFromEnd('taq'); // 't'
    @example - get3rdCharFromEnd('mo'); // 'not enough characters!'
    @example - get3rdCharFromEnd('taq karim'); // 'r'
*/
const get3rdCharFromEnd = str => {
    if (str.length < 3) return "not enough characters";

    //return str.charAt(str.length - 3);
    //return str[str.length - 3];
    return str.slice(-3, -2);
}

// const get3rdCharFromEnd = str => str.length < 3 ? 'not enough characters' : str.slice(-3,-2)

console.log("### get3rdCharFromEnd ###")
console.log(get3rdCharFromEnd('taq'), 't') // 't'
console.log(get3rdCharFromEnd('mo'), 'not enough characters') // not enough chars
console.log(get3rdCharFromEnd('taq karim'), 'r') // r

/* 5
    @func startsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string STARTS with vowel, return true
    @example - startsWithVowel('taq'); // false
    @example - startsWithVowel('Dfghjkl'); // false
    @example - startsWithVowel('andy'); // true
    @example - startsWithVowel('Andy'); // true
*/
/*
const startsWithVowel = str => {
    const lowered = str.toLowerCase();

    if (lowered.charAt(0) === 'a') return true;
    if (lowered.charAt(0) === 'e') return true;
    if (lowered.charAt(0) === 'i') return true;
    if (lowered.charAt(0) === 'o') return true;
    if (lowered.charAt(0) === 'u') return true;

    return false;
}
*/

/*
const startsWithVowel = str => {
    const f = str.toLowerCase().slice(0,1);

    if (f === "a" || f === "e" || f === "i" || f === "o" || f === "u") {
        return true;
    }

    return false;
}
*/

const startsWithVowel = str => {
    const withVowel = str.charAt(0).toLowerCase()
    if ("aeiou".indexOf(withVowel) > -1) {
        return true;
    }

    return false;
}

console.log("### startsWithVowel ###")
console.log("returns false for input 'taq'", startsWithVowel('taq') === false);
console.log("returns false for input 'Dfghjkl'", startsWithVowel('Dfghjkl') === false);
console.log("returns false for input 'andy'", startsWithVowel('andy') === true);
console.log("returns false for input 'Andy'", startsWithVowel('Andy') === true);

/* 6
    @func endsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string ENDS with vowel, return true
    @example - endsWithVowel('taq'); // false
    @example - endsWithVowel('Dfghjkl'); // false
    @example - endsWithVowel('andi'); // true
    @example - endsWithVowel('AndI'); // true
*/
const endsWithVowel = str => {
    const withVowel = str.charAt(str.length-1).toLowerCase()
    if ("aeiou".indexOf(withVowel) > -1) {
        return true;
    }

    return false;
}

console.log("### endsWithVowel ###")
console.log("returns false for input 'taq'", endsWithVowel('taq') === false);
console.log("returns false for input 'Dfghjkl'", endsWithVowel('Dfghjkl') === false);
console.log("returns false for input 'andi'", endsWithVowel('andi') === true);
console.log("returns false for input 'Andi'", endsWithVowel('Andi') === true);


/* 7
    @func hasVowels
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one vowel, return true
    @example - hasVowels('taq'); // true
    @example - hasVowels('TAQ'); // true
    @example - hasVowels('dfghjkl'); // false
    @example - hasVowels('taq karim'); // true
*/
const hasVowels = str => {
    const lowered = str.toLowerCase();

    if (lowered.indexOf('a') > -1) return true;
    if (lowered.indexOf('e') > -1) return true;
    if (lowered.indexOf('i') > -1) return true;
    if (lowered.indexOf('o') > -1) return true;
    if (lowered.indexOf('u') > -1) return true;

    return false;
}

console.log("### hasVowels ###")
console.log("returns false for input 'taq'", hasVowels('taq') === true);
console.log("returns false for input 'TAQ'", hasVowels('TAQ') === true);
console.log("returns false for input 'dfghjkl'", hasVowels('dfghjkl') === false);
console.log("returns false for input 'taq karim'", hasVowels('taq karim') === true);


/* 8
    @func hasUpperCase
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one uppercase letter, return true
    @example - hasUpperCase('tAq'); // true
    @example - hasUpperCase('TAQ'); // true
    @example - hasUpperCase('tag'); // false
    @example - hasUpperCase('taq karim'); // false
*/

/* 9
    @func isPalindromic
    @param {string} str
    @returns {boolean}
    @desc - if string is a palindrome (ie: the same forward and backwards, like "racecar") return true
    @example - isPalindromic('racecar'); // true
    @example - isPalindromic('racecars'); // false
    @example - isPalindromic('bats see bees stab'); // false
    @example - hasUpperCase('taq karim'); // false
*/

/* 10
    @func getInitials
    @param {string} str
    @returns {string}
    @desc - given a name (ie: "taq karim"), return the initials (ie: "tk")
            assume there will always be at least one space between first name/last name
            assume only first and last names are provided
    @example - getInitials('taq karim'); // "tk"
    @example - getInitials('mo    mosayed'); // "mm"
    @example - getInitials('John       Smith'); // "js"
    @example - getInitials('sue RonaN'); // "sr"
*/

/* 11
    @func isPerfectStr
    @param {string} str
    @returns {boolean}
    @desc - a "perfect" string (not real, I just made this up) is defined to be a string such that:
            1. has more than three characters
            2. the three middle characters are arranged such that first character is vowel,
                second character is consonant and last character is another vowel
            3. the three middle characters are palindromic
    @example - isPerfectStr('ab'); // false
    @example - isPerfectStr('aba'); // true
    @example - isPerfectStr('asdfaeKeccc'); // false
    @example - isPerfectStr('asdfaeKeccccc'); // true
*/

/* 12
    @func strMasher
    @param {string} str1
    @param {string} str2
    @returns {string}
    @desc - given two strings, str1 and str2, return a new string
            with str2 mashed into the middle of str1
    @example - strMasher('help', 'me'); // "hemelp"
    @example - capitalLast('hello', 'wrold'); // "helwroldlo"
*/

