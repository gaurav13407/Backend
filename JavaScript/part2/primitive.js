//NUmbers

let balance=120;

let anotherBalance = new Number(120)

console.log(anotherBalance.valueOf());


console.log(typeof(balance));
console.log(balance);

console.log(typeof(anotherBalance));

//bollean

let isActive=true;
let siReallyActive = new Boolean(true)

console.log(isActive);
console.log(siReallyActive);

// null and undefine
let firstname;
console.log(firstname);//undefine
firstname=null;
console.log(firstname);

//String

let myString="hello";
let myString1="olla";
let userName="Gaurav";

let oldGreet=myString+" gaurav"

console.log(oldGreet);

let greetMeassage=`Hello ${userName}!`;
console.log(greetMeassage);


let deomOne=`Value is :${2*2}`;
console.log(deomOne);

let sm1=Symbol("Gaurav");
let sm2=Symbol("Gaurav");
console.log(sm1==sm2);

