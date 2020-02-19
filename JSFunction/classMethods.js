// Class Methods
/* 
As we know classes ae blue prints of objects and an object is store data in 
key value pair but sometimes we want to do some operations on that objects or class speicifically 
so for that porpose we create some methods for that class or objects  
*/
class BankAccount {
    constructor(name,amount) {
        this.name = name;
        this.balance = amount;
    }
    checkBalance() {
        console.log(`Your Current Balance is RS:${this.balance}PKR`)
    }
    cashDeposit(amount) {
        console.log(`You have deposited RS:${amount}PKR`);
        this.balance += amount;
        console.log(`Now your Current Balance is RS:${this.balance}PKR`)
    }
    cashWithdrawal(amount) {
        console.log(`You have Withdrawal RS:${amount}PKR`);
        this.balance -= amount;
        console.log(`Now your Current Balance is RS:${this.balance}PKR`)
    }
}
let myAccount = new BankAccount('Shahab',500)
myAccount.checkBalance()
myAccount.cashWithdrawal(100)

console.log(myAccount)

// Static Methods
/*
There is a special type of method you can add to a class: static. These 
differ from instance methods because they are not linked to a specific instance 
of a class, but to the class itself.  OR
We can also assign a method to the class function itself, not to its "prototype". Such methods are 
called static. In a class, they are prepended by static keyword, like this: OR
As MDN describes it, “Static methods are called without instantiating their class and are also not 
callable when the class is instantiated. Static methods are often used to create utility functions 
for an application.” In other words, static methods have no access to data stored in specific objects.
*/
console.log('Static Methods')

class Warnings {
    static greetUser(user) {
        console.log(`Hello ${user}! Keep these instructions in your mind`)
    }
    static consoleWarning() {
        console.log("Do not Paste any link in Console It will Steal your data")
    }
    static AdBlocker() {
        console.log("Don't Use any Ad-Blocker")
    }
    static hhtpsWar() {
        console.log("This Site is not HTTPS Certified")
    }
}
Warnings.greetUser('Shahab')
Warnings.AdBlocker()
Warnings.consoleWarning()
Warnings.hhtpsWar()

const myBio = {
    name: 'Shahab',
    age: 19
}

function callMyName(user) {
    const person = {
        user: user.name
    }
    return person
}

console.log(callMyName(myBio))