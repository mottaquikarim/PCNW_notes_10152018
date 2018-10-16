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

console.log(makeEven('hello')) // this is a sample str
console.log(makeEven('odd')) // odd#
console.log(makeEven('even')) // even


