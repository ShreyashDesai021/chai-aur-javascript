// generate random num

const randomColor = function(){ // function to generate random color
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0;i <= 5;i++){
        color = color + hex[Math.floor(Math.random() * 16)]
    }
    console.log(color)
    return color
    
}

let intervalId; // to store the interval ID in global scope

const startChangingColor = function(){ // To start changing color
    if(!intervalId){ // to prevent multiple intervals from being created
        intervalId = setInterval(changeBgColor,1000) // setInterval is used to call a function repeatedly at a specified interval (in milliseconds)
    }
}
function changeBgColor(){
    document.body.style.backgroundColor = randomColor(); // change the background color of the body to a random color
}  

const stopChangingColor = function(){
    console.log("STOPPED!")
    clearInterval(intervalId) // clearInterval is used to stop the setInterval function from executing
    intervalId = null // reset intervalId to allow restarting
}


document.querySelector('#start').addEventListener('click',startChangingColor)
    
document.querySelector('#stop').addEventListener('click',stopChangingColor)