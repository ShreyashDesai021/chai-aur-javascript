// class User{ // class is used to create a blueprint for objects
//   constructor(username,email,password) { // constructor is called when a new object is created
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword(){ // method to encrypt password
//     // complex encryption logic
//     return `${this.password}abc`; // just a dummy encryption for illustration
//   }

//   changeUsername(){
//     return `${this.username.toUpperCase()}`
//   }

// }

// const chai = new User("chai","chai@gmail.com","123");
// console.log(chai);
// console.log("Encrypted Password:", chai.encryptPassword());
// console.log("Changed Username:", chai.changeUsername());

// Behind the scenes, the above class syntax is similar to the following function-based approach:

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());