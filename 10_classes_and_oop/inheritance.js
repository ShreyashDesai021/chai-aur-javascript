class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{ // Teacher class inherits from User class
    constructor(username, email, password){
        super(username) // super keyword is used to call the constructor of the parent class
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai === masalaChai); // false because they are different objects in memory
console.log(chai === Teacher); // false because chai is an object and Teacher is a class

console.log(chai instanceof Teacher); // true because chai is an instance of Teacher class
console.log(chai instanceof User); // true because Teacher class inherits from User class so chai is also an instance of User class