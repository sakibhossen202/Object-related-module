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