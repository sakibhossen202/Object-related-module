//object method property review
const normalPerson ={
    firstName: "Sakib",
    lastName:"Hossen",
    salary :100000,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    },
    billCharge: function(amount,tips,tax){
        this.salary = this.salary - amount - tips - tax;
        return this.salary
         
    }
}

// console.log(normalPerson.fullName())

// normalPerson.billCharge(12000);
// normalPerson.billCharge(50000)
// normalPerson.billCharge(10000)
// console.log(normalPerson.salary);

//bind method in object dhar korjo

const loverPerson ={
    firstName: "Niamul",
    lastName:"Hossen",
    salary :10000

}
// const loverPersonSalary = normalPerson.billCharge.bind(loverPerson)
// loverPersonSalary(1200)
// loverPersonSalary(2000)
// console.log(loverPerson.salary)

const friendlyPerson ={
    firstName: "Habib",
    lastName:"Hossen",
    salary :18000
}

// const friendlyPersonCharge = normalPerson.billCharge.bind(friendlyPerson)
// friendlyPersonCharge(1000)
// console.log(friendlyPersonCharge(2000))
// console.log(friendlyPerson.salary)

//call method

// normalPerson.billCharge.call(friendlyPerson,2000,200,20);

normalPerson.billCharge.apply(friendlyPerson,[2000,150,150])
console.log(friendlyPerson.salary)

//Global Variable
var globalVariable = "You have passed the exam of global Variable"
function addNumbers(num1,num2){
    console.log("inside function",globalVariable)
    const output = num1 + num2;
    function double(num){
        return num * num;
    }
    const result = double(output)
    return result;
}
console.log("outside function",globalVariable)
console.log(addNumbers(34,35))

//new keyword, class, and object difference

class makeObject{
    constructor(firstName,lastName,salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
       
    
}

const noisyBoy = new makeObject("Jony","pk",12000)
const silentBoy = new makeObject("Imam","Hassan",15000)
const friendlyBoy = new makeObject("Naimul","Habib",30000)
console.log(noisyBoy,silentBoy,friendlyBoy)
    
