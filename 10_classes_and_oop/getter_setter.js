class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    // both getter and setter methods should have the same name as the property they are trying to access or modify
    // both must be defined , only one of them will give error
    
    // get password(){ // getter method used to access the property
    //     return this.password.toUpperCase();
    // }

    // set password(value){
    //     this.password = value;
    // }

    // the above getter and setter will give maximum call stack size exceeded error because they are recursively calling themselves
    // to avoid this we can use a different name for the property and the getter and setter methods

    get password(){
        return this._password.toUpperCase(); // accessing the _password property
    }

    // get password(){
    //     return `${this._password}hitesh`
    // }

    set password(value){
        this._password = value; // modifying the _password property
    }

    // now the password property is accessible only through the getter and setter methods 
    // and the actual password is stored in the _password property

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

}

const hitesh = new User("h@hitesh.ai","abc");

console.log(hitesh.password); // ABC

console.log(hitesh.email); 

// we want to hide the password property and make it accessible only through getter and setter methods

