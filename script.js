//object method property review
const normalPerson ={
    firstName: "Sakib",
    lastName:"Hossen",
    salary :100000,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    },
    billCharge: function(amount){
        this.salary = this.salary - amount;
        return this.salary
         
    }
}
console.log(normalPerson.fullName())

normalPerson.billCharge(12000);
normalPerson.billCharge(50000)
normalPerson.billCharge(10000)
console.log(normalPerson.salary);

//bind method in object dhar korjo

const loverPerson ={
    firstName: "Niamul",
    lastName:"Hossen",
    salary :10000

}
const loverPersonSalary = normalPerson.billCharge.bind(loverPerson)
loverPersonSalary(1200)
loverPersonSalary(2000)
console.log(loverPerson.salary)

const friendlyPerson ={
    firstName: "Habib",
    lastName:"Hossen",
    salary :18000
}

const friendlyPersonCharge = normalPerson.billCharge.bind(friendlyPerson)
friendlyPersonCharge(1000)
console.log(friendlyPersonCharge(2000))
console.log(friendlyPerson.salary)