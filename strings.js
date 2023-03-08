/*Extract the last four characters from the string below;
"extravaganza"*/

let text = "extravaganza"
let part = text.slice(8,12)
console.log(part)

/*Insert the following string at the fourth index of the below variable:
"eat"
const food = "The quick fox jumped over the lazy dog" */

var stri = "The quick fox jumped over the lazy dog"
var ch = "eat"
var index = [4]
stri = stri.substring(0,index) + ch + stri.substring(index,stri.length)
console.log(stri)

/* Count how many times the following string appears in the string variable:
1. "the"
2."brown"
const story= "The quick brown fox jumps over the lazy dog"
*/
// program to check the number of occurrence of a character

const story ="The quick fox jumped on the lazy dog"
const letter = (story.match(/the/g)||[]).length;
const word=(story.match(/brown/g)||[]).lenght;
console.log(letter);
console.log(word);

/*Using JavaScript, find the following words from the following strings:
1. "are"
const string1 = "The pupils are reading in the library";
2. "sitting"
const string2 = "The child was sitting on the table before it fell */

const string1 = "The pupils are reading in the library "
const pupils = string1.search("are")
console.log(pupils)
const string2 = "The child was sitting on the table before it fell"
const child = string2.search("sitting")
console.log(child)

/*Convert the following strings into the specified format:
1. UpperCase: "wonderful"
2. LowerCase: "amazing", "UndERneath"
3. Title case "A wonderful world" */

const large="wonderful"
const larger=large.toUpperCase()
console.log(larger)

const less="amazing"
const lesser=less.toLowerCase()
console.assert(lesser)

const small="BEneath"
const smaller=small.toLowerCase()
console.log(smaller)

const title="A wonderful world"
const title2=title.toLocaleUpperCase()
console.log(title2)


