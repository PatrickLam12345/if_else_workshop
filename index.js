let input = "I am a string"

if (input === "I am a string") {
    console.log(true)
} else if (input === false) {
    console.log("The boolean value false is falsy")
} else if (input === null) {
    console.log("The null value is falsy") 
} else if (input === undefined) {
    console.log("undefined is falsy") 
} else if (input === 0) {
    console.log("The number 0 is falsy (the only falsy number)") 
} else if (input === "") {
    console.log("The empty string is falsy (the only falsy string)") 
}

let num1 = 50
let num2 = 51
let sum = num1 + num2

if (sum > 100) {
    console.log(sum + "is greater than 100");
} else if (sum > 0) {
    console.log(sum + "is greater than 0");
} else if (sum === 0) {
    console.log(sum + "is equal to 0");
} else if (sum === -1000) {
    console.log(sum + "is a negative number");
} else if (sum === -5) {
    console.log(sum + "is a negative number");
}

let num3 = 5
let num4 = 6

if (num3 >= 5 && num4 >=5) {
    console.log(true)
} else {
    console.log(false)
}

if ((param1A === param1B) || (param2A === param2B)) {
    console.log(true);
} else {
    console.log(false);
}