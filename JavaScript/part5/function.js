/*function greet(name){
    console.log(`Hello ${name}`);
    
}

// greet("Gaurav");

//Function within Function and execution context

function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}

// console.log(makeTea("Green Tea"));


//Problem 2
function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for ${teaType}`;
    }
    return confirmOrder();
}

// console.log(orderTea("chai"));

// Arrows Function
const calculateTotal =(price,quantity)=>{
    return price*quantity;
}
let totalCost=calculateTotal(500,5);
// console.log(totalCost);

// another Way of one line function
// const calculateTotal =(price,quantity)=> price*quantity;
*/

//Problem 4

// function MakeTea(typeOfTea){
//     return `maketea:${typeOfTea}`;
// }
// function processTeaOrder(teaFunction){
//     return teaFunction("earl grey");
// }
// let order=processTeaOrder(MakeTea);
// console.log(order);

//problem 5
function createTeaMaker(){
    return function(teaType){
        return `Making ${teaType}`;
    }
}
let teaMaker=createTeaMaker();
console.log(teaMaker("grenn tea"));

