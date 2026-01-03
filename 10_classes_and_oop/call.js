function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    //SetUsername(username) // here we have only giving refernece of the call  

    //SetUsername.call(username) // here we are calling SetUsername function with call method
    // but still this will not refer to the newly created object as we have not passed it as first argument to call method

    SetUsername.call(this, username) // here we are passing this as first argument to call method
    // now this inside SetUsername will refer to the newly created object
    // this is used to pass current execution context to another function
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai); // this will not have username property and only print email and password
                    //this is because SetUsername function is not called with new keyword so this inside it
                    // does not refer to the newly created object