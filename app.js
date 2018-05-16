// Write a javascript program that checks your account balance. If the account is active it should print the balance in your account.

let bal = "your Account balance is 10500.00"
let count = 2;
let username = "mathew";
let acctName = prompt("what is your Account Name?")
if (acctName !== username) {
    count--;
    alert("you dont have an account with us");
}
name = prompt("what is your Account Name?");

if (name === username) {
    count--;
    alert(bal);
};


// (3)Write a series of conditional statements that:

//   (a) prints "not a group" if musicians is less than or equal to 0

//   (b) prints "solo" if musicians is equal to 1

//   (c) prints "duet" if musicians is equal to 2

//   (d) prints "trio" if musicians is equal to 3

//  (e) prints "quartet" if musicians is equal to 4

//  (f) prints "this is a large group" if musicians is greater than 4

let musicians = (0);

if (musicians < 0 || musicians === 0) {

    alert("not a group");
    musicians++
}

if (musicians === 1) {
    alert("solo");
    musicians++
}
if (musicians === 2) {
    alert("duet");
    musicians++
}
if (musicians === 3) {
    alert("trio");
    musicians++
}
if (musicians === 4) {
    alert("quarter");
    musicians++
}
if (musicians > 4) {
    alert("T4his is a large group");
    musicians++
}



// (2) Write a javascript program to output even and odd numbers if a number is divided by another

var num1 = prompt("put a number");
var num2 = prompt("divide the number");
var total = num1 / num2;
if (num1 % num2 === 0) {
    alert(total + " this is a even number")
}
else if (num1 % num2 === 1) {
    alert(total + " this is a odd number")
};







