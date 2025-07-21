let car={
    make:"Toyota",
    model:"Camry",
    year:2020,

    start:function(){
        return `${this.make}car got started in ${this.year}`
    }
};
// console.log(car.start());

function Person(name,age){
    this.name=name
    this.age=age
}
let john =new Person("john Doe",20)
// console.log(john.name);

//Proptotyple Chain
function Animal(type){
    this.type=type
}

Animal.prototype.speak=function(){
    return `${this.type} makes a sound`
}

Array.prototype.gaurav=function(){
    return `Custom Method ${this}`
}
let myArray=[1,2,3,4];
// console.log(myArray.gaurav());

let myNewArray=[1,2,3,4,5,6];
// console.log(myNewArray.gaurav());


class Vehicel{
    constructor(make,model){
        this.make=make
        this.model=model
    }
    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

class Car extends Vehicel{
    drive(){
        return `${this.make}: This is an inheritence Example`
    }
}
let myCar1=new Car("Tesla","MOdel X");
// console.log(myCar1.start());
// console.log(myCar1.drive());


let vehicle1=new Vehicel("Tata","Harrier");
// console.log(vehicle1.make);



//Encapsulation


class BankAccount{
    #balance=0;

    deposite(amount){
        this.#balance +=amount;
        return this.#balance;
    }

    getBalance()
    {
        return `$ ${this.#balance}`;
    }
}

let account=new BankAccount();
// console.log(account.getBalance());
account.deposite(500);
// console.log(account.getBalance());



// Abstraction

class CoffeMachine{
    start(){
        //Call the DB
        //filter value
        return 'Starting the Machine'
    }
    brewCofee(){
        //Complex Calcualtion
        return `Brewing Coffe`;

    }
    pressStartButton(){
        let ms1=this.start();
        let ms2=this.brewCofee();
        return`${ms1} + ${ms2}`;
    }
}

let MyMachie=new CoffeMachine()
// console.log(MyMachie.start());
// console.log(MyMachie.brewCofee());
// console.log(MyMachie.pressStartButton());


//Polymorphism

class Bird{
    fly(){
        return `Flying...`;
    }
}

class Penguin extends Bird{
    fly(){
        return `Pegunins Can't Fly`;
    }
}

let bird=new Bird();
let penguine=new Penguin();
// console.log(bird.fly());
// console.log(penguine.fly());

// Static Method

class Claculator{
    static add(a,b){
        return a+b;
    }
}

// let miniCal=new Claculator();
// console.log(miniCal.add(2,3));

// console.log(Claculator.add(2,3));


//Getter And Setters

class Employee{
    #salary;
    constructor(name,salary)
    {
        if(salary<0){
            throw new Error('Salary Cant be Negative');
        }
        this.name=name;
        this.#salary=salary;
    }
    get salary(){
        return `You Are Not Allowed to see to see salary`;
    }

    set salary(value){
        if(value<0){
            console.log("Inavlid Salary");
            
        }else{
            this._salary=value;
        }
    }
}
let emp=new Employee("Alice",200000);
console.log(emp.salary);
emp.salary=60000;
k

