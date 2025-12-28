const form = document.querySelector('form');

// this usecase will give you empty:
// const height = parseInt(document.querySelector('#height').value)
// This usecase will get empty string if we try to get value here because at this point user has not entered any value yet.
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    //document.querySelector('#height').value // To get the value of height input in string format
    const height = parseFloat(document.querySelector('#height').value); // Convert height to a number

    const weight = parseFloat(document.querySelector('#weight').value);

    //let errors = []; // Array to hold error messages

    if(isNaN(height) || height < 0 || height === ''){
        //errors.push(`Please give a valid height ${height}`);
        results.innerHTML = `Please give a valid height ${height}`;
    } else if(isNaN(weight) || weight < 0 || weight === ''){
        //errors.push(`Please give a valid weight ${weight}`);
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2); // BMI calculation
                                                                //toFixed(2) to limit to 2 decimal places
        results.innerHTML = `<span>${bmi}</span>`;

        
    }

    

    // if (errors.length > 0) {
    // results.innerHTML = errors.join("<br>");
    // return;
    // }


    
});