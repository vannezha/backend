// undefined (when we not initialized the value of variable - > we can check type of it using command typeof() )
let a
console.log(typeof(a))

//  number
let b = 10;
console.log(typeof(b))

/* output: number */

let c = 17.25;
console.log(typeof(c))

/* output: number */
// we can do arithmathic operation as well (+-*/% and **

/* Increment dan Decrement */

let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */


// bigint (add n in the end of number)
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/
console.log(1n+2n)

// string, both ' and " are same, \ for escaping character
const answer = '"I think it\'s awesome!" he answered confidently'

// string concatination
const thisis = "this is string"
console.log(thisis+" "+"concatination")
console.log(`${thisis} string interpolation`) // should use backtip neither ' nor "

// boolean

console.log(true == false) // false

// null (better than undifined, because we ininitialize first and then change later)
let someLaterData = null;
console.log(someLaterData);

// symbol

const id1 = Symbol("id")
const id2 = Symbol("id")
console.log(id1==id2) // return false