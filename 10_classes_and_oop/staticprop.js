class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // static method is used to create a method that belongs to the class itself and not to the instances of the class
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId()) // error because static methods are not inherited by instances
console.log(User.createId()) // works because static methods are called on the class itself

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId()); // error because static methods are not inherited by instances
console.log(Teacher.createId()); // works because static methods are called on the class itself