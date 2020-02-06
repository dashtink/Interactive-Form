//Automatically focus on the first field
document.getElementById('name').focus();
const titleOther = document.getElementById('title-other');
const titleOtherLabel = document.getElementById('title-other-label');
titleOther.style.display = 'none';
titleOtherLabel.style.display = 'none';

// If "Other" is selected as the Job Role, adds an additional other text field.

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
let colorOptions = color.getElementsByTagName('option');
let colorSelect = document.createElement('OPTION');
colorSelect.innerHTML = "Please select a T-shirt theme";
let firstColor = colorOptions[0];
console.log(firstColor);
color.insertBefore(colorSelect, firstColor);
colorSelect.selected = true;

for (i = 0; i < colorOptions.length; i++) {
    if (i > 0) {
        colorOptions[i].hidden = true;
    };
}

let design = document.getElementById('design');
design.addEventListener('change', (e) => {

    for (i = 0; i < colorOptions.length; i++) {
        if (e.target.value == 'js puns') {
            if (i <= 3) {
                colorOptions[i].hidden = false;
            } else {
                colorOptions[i].hidden = true;
            };

        } else if (e.target.value == 'heart js') {
            if (i > 3) {
                colorOptions[i].hidden = false;
            } else {
                colorOptions[i].hidden = true;
            };
        }
    };
});

// Need to add: When a new theme is selected from the "Design" menu, both the "Color" field and drop down menu is updated.


// Need to add: ”Register for Activities” section

    // If the user selects a workshop, don't allow selection of a workshop at the same day and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available. Reverse this when the activity is unchecked

    // As a user selects activities, a running total should display below the list of checkboxes. 


// Displays payment sections based on the payment option chosen in the select menu.
let paymentMethod = document.getElementById('payment');
let selectMethod = document.querySelector('option[value="select method"]');
selectMethod.disabled = true;
let creditCardMethod = document.querySelector('option[value="credit card"]');
creditCardMethod.selected = 'true';
let creditCard = document.getElementById('credit-card');
let paypal = document.getElementById('paypal');
let bitcoin = document.getElementById('bitcoin');
paypal.style.display = 'none';
bitcoin.style.display = 'none';

paymentMethod.addEventListener('change', (e) => {
    if (e.target.value === "paypal") {
        paypal.style.display = '';
        bitcoin.style.display = 'none';
        creditCard.style.display = 'none';
    } else if (e.target.value === "bitcoin") {
        paypal.style.display = 'none';
        bitcoin.style.display = '';
        creditCard.style.display = 'none';
    } else if (e.target.value === "credit card") {
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
        creditCard.style.display = '';
    };

});


//Adds Form Validation for Name, Email, Credit Card Number, Zip Code and CVV
const name = document.getElementById('name');
const email = document.getElementById('mail');
const activities = document.getElementById('activities');
const cardNumber = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const nameError = document.getElementById('name-error');
nameError.style.display = 'none';
const mailError = document.getElementById('mail-error');
mailError.style.display = 'none';
const ccnumError = document.getElementById('ccnum-error');
ccnumError.style.display = 'none';
const zipError = document.getElementById('zip-error');
zipError.style.display = 'none';
const cvvError = document.getElementById('cvv-error');
cvvError.style.display = 'none';
const submit = document.querySelector('button');


name.addEventListener('input', (e) => {
    const regexCheck = /^\s*$/.test(e.target.value);

    if (regexCheck) {
        nameError.style.display = '';
        submit.disabled = 'true';
    } else {
        nameError.style.display = 'none';
        submit.disabled = 'false';
    }
});

email.addEventListener('input', (e) => {
    const regexCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value);

    if (regexCheck) {
        mailError.style.display = 'none';
        submit.disabled = 'false';
    } else {
        mailError.style.display = '';
        submit.disabled = 'true';
    }
});

// activities.addEventListener('input', (e) => {
    
// });

cardNumber.addEventListener('input', (e) => {
    const regexCheck = /(^[0-9]{12,15})\d$/.test(e.target.value);

    if (regexCheck) {
        ccnumError.style.display = 'none';
        submit.disabled = 'false';
    } else {
        ccnumError.style.display = '';
        submit.disabled = 'true';
    }
});


zipCode.addEventListener('input', (e) => {
    const regexCheck = /(^[0-9]{4})\d$/.test(e.target.value);

    if (regexCheck) {
        zipError.style.display = 'none';
        submit.disabled = 'false';
    } else {
        zipError.style.display = '';
        submit.disabled = 'true';
    }
});

cvv.addEventListener('input', (e) => {
    const regexCheck = /(^[0-9]{2})\d$/.test(e.target.value);

    if (regexCheck) {
        cvvError.style.display = 'none';
        submit.disabled = 'false';
    } else {
        cvvError.style.display = '';
        submit.disabled = 'true';
    }
});

 //User must select at least one checkbox under the "Register for Activities" section
    //Prevent form submission if less than one activity is selected

submit.addEventListener('submit', (e) => {
    console.log('test');
});