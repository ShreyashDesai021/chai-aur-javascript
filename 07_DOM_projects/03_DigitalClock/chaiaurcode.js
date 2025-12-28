const clock = document.getElementById('clock')

let date = new Date()
console.log(date.toLocaleTimeString()) 

//setInterval(function, milliseconds) is used to call a function 
// repeatedly after every specified milliseconds
setInterval(function(){ //callback function
    let date = new Date()
    //console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString() //updating the innerHTML of clock div
},1000); // 1000 milliseconds = 1 second