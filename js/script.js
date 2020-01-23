//Automatically focs on the first field
document.getElementById('name').focus();
const titleOther = document.getElementById('title-other');
const titleOtherLabel = document.getElementById('title-other-label');
titleOther.style.display = 'none';
titleOtherLabel.style.display = 'none';

//”Job Role” section
//if the Job role field has a value of other
    //show the other text field
    //else hide other text field

const title = document.getElementById('title')
console.log(title);
const titleValue = title.value;
console.log(titleValue);

title.addEventListener('change', (e) => {
console.log(e);
    if (e.target.value == 'other') {
        titleOther.style.display = '';
        titleOtherLabel.style.display = '';
    } else {
        titleOther.style.display = 'none';
        titleOtherLabel.style.display = 'none';
    }
});

// T-Shirt: Adds an addition option to the Color field and hides color values until the Design Theme is

    let color = document.getElementById('color');
    color.placeholder = "test";
    let colorOptions = color.getElementsByTagName
    ('option');

    let colorSelect = document.createElement('OPTION');
    colorSelect.innerHTML = "Please select a T-shirt theme";
    let firstColor = colorOptions[0];
    console.log(firstColor);
    color.insertBefore(colorSelect, firstColor);
    colorSelect.selected = true;

    for (i = 0; i < colorOptions.length; i++){   
        if(i > 0){   
        colorOptions[i].hidden = true;
        };
    }

    let design = document.getElementById('design');
    design.addEventListener('change', (e) => {

        for (i = 0; i < colorOptions.length; i++){
            if (e.target.value == 'js puns') {
                if (i <= 3){
                colorOptions[i].hidden = false;
                } else {
                colorOptions[i].hidden = true;
                };

            } else if (e.target.value == 'heart js') {
                if (i > 3){
                colorOptions[i].hidden = false;
                } else {
                colorOptions[i].hidden = true;
                };
            }
        };
    });

    // When a new theme is selected from the "Design" menu, both the "Color" field and drop down menu is updated.


//”Register for Activities” section

    // If the user selects a workshop, don't allow selection of a workshop at the same day and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available. Reverse this when the activity is unchecked

    // As a user selects activities, a running total should display below the list of checkboxes. 


//"Payment Info" section

    // Display payment sections based on the payment option chosen in the select menu.
    let paymentMethod = document.getElementById('payment');
    let selectMethod = document.querySelector('option[value="select method"]');
    selectMethod.disabled = true;
    let creditCard = document.getElementById('credit-card');
    let paypal = document.getElementById('paypal');
    let bitcoin = document.getElementById('bitcoin');
    paypal.style.display = 'none';
    bitcoin.style.display = 'none';

    paymentMethod.addEventListener('change', (e) => {
        if (e.target.value === "paypal"){
            console.log('paypal listener works');
            paypal.style.display = '';
            bitcoin.style.display = 'none';
            creditCard.style.display = 'none';
        } else if (e.target.value === "bitcoin"){
            console.log('bitcoin listener works');
            paypal.style.display = 'none';
            bitcoin.style.display = '';
            creditCard.style.display = 'none';
        } else if (e.target.value === "credit card"){
            console.log('bitcoin listener works');
            paypal.style.display = 'none';
            bitcoin.style.display = 'none';
            creditCard.style.display = '';
        };
        
    });

    //The user should not be able to select the "Select Payment Method" option on the form


//Form validation

    //Prevent form submission if:
        //Name field is blank
        //Email field must be a validly formatted e-mail address
        //User must select at least one checkbox under the "Register for Activities" section
        //If payment method is credit card validate for correct payment details

//Form validation messages

    //Display red text message near field if the validation fails, turn border red
    //Messages should hide when the validation is corrected.