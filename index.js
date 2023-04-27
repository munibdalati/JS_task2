// 1
let age = 27
if (age > 18) {
   console.log("You are an adult"); 
}

// 2
let score = 45
if (score <= 50){
    console.log("You failed the test");
}

// 3
let name = "John"
if (name == "John"){
    console.log("Hello, John");
}

// 4
let day = "Monday"
if (day != "Saturday" && "Sunday"){
    console.log("It's a weekday");
}

// 5
let num = 4
if (num%2==0){
    console.log("The number is even");
}

// 6
char = "o"
if (char.length == 1 ){
    console.log("It's a letter")
}

// 7
let list = [1, 2, 3]
if (Array.isArray(list) == true){
    console.log("It's an array");
}

// 8
let x = 7
if (x > 0){
    console.log(x + " is a positive number");
}

//9
let y = -9
if (y < 0){
    console.log(y + " is a negative number");
}

//10
let z = 9
if (z % 3 == 0){
    console.log(z + " is a multiple of 3");
}

//11
gpa = 4
if (gpa>=3){
    console.log("Congratulations, you have a good GPA!");
}

//12
let password = "12345678"
if (password.length >=8){
    console.log('Your password is strong');
}

//13
let age1 = 55
if (age1 > 18 && age1 <65){
    console.log("You are of working age");
}

//14
let color = "red"
if (color=="red" || "green" || "blue"){
    console.log("color is a primary color");
}

//15
function isNumber(p){
if (typeof(p)=="number"){
    console.log(p + " is a valid number");
}
else{
    console.log(p + " is not a valid number");
}
}
isNumber(254);
