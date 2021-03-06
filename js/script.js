//Automatically focus on the "Name" field when the page is loaded.
document.getElementById('name').focus();
const titleOther = document.getElementById('title-other');
const titleOtherLabel = document.getElementById('title-other-label');
titleOther.style.display = 'none';
titleOtherLabel.style.display = 'none';

// If the "Job Role" field is set to "Other" add and additional "Other field"
const title = document.getElementById('title')
console.log(title);
const titleValue = title.value;
console.log(titleValue);

// Checks if the "Job Role" field is changed.
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

// Hides "Color" theme options until a selection is made in the "Design" field.
let color = document.getElementById('color');
color.placeholder = "test";
let colorOptions = color.getElementsByTagName('option');
let colorSelect = document.createElement('OPTION');
colorSelect.innerHTML = "Please select a T-shirt theme";
let firstColor = colorOptions[0];
console.log(firstColor);
color.insertBefore(colorSelect, firstColor);
colorSelect.selected = true;

// Loops over and hides themes in the "Color" field.
for (i = 0; i < colorOptions.length; i++) {
    if (i > 0) {
        colorOptions[i].hidden = true;
    };
}

// Hides and shows the options in the "Color" field based on the "Design" field seleciton. 
let design = document.getElementById('design');
design.addEventListener('change', (e) => {

    for (i = 0; i < colorOptions.length; i++) {
        if (e.target.value == 'js puns') {
            colorSelect.selected = true;
            if (i <= 3) {
                colorOptions[i].hidden = false;
            } else {
                colorOptions[i].hidden = true;
            };

        } else if (e.target.value == 'heart js') {
            colorSelect.selected = true;
            if (i > 3) {
                colorOptions[i].hidden = false;
            } else {
                colorOptions[i].hidden = true;
            };
        }
    };
});


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


// Adds Form Validation for Name, Email, Credit Card Number, Zip Code and CVV fields.
const name = document.getElementById('name');
const email = document.getElementById('mail');
const activities = document.getElementsByClassName('activities');
const cardNumber = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const submit = document.querySelector('button');
const form = document.querySelector('form');

//Creates Error Messages
const basicFieldset = document.getElementById("basic-info")

const nameErrorMessage = document.createElement('span');
nameErrorMessage.className = 'validation';
nameErrorMessage.id = 'name-error';
nameErrorMessage.style.display = 'none';
nameErrorMessage.textContent = "Name cannot be blank.";
basicFieldset.insertBefore(nameErrorMessage, name);

const emailErrorMessage = document.createElement('span');
emailErrorMessage.className = 'validation';
emailErrorMessage.id = 'mail-error';
emailErrorMessage.style.display = 'none';
emailErrorMessage.textContent = "Must be a valid email address.";
basicFieldset.insertBefore(emailErrorMessage, email);

const paymentsFieldset = document.getElementById("payments")

const cardErrorMessage = document.createElement('span');
cardErrorMessage.className = 'validation';
cardErrorMessage.id = 'ccnum-error';
cardErrorMessage.style.display = 'none';
cardErrorMessage.textContent = "Invalid credit card number. ";
paymentsFieldset.appendChild(cardErrorMessage);

const zipErrorMessage = document.createElement('span');
zipErrorMessage.className = 'validation';
zipErrorMessage.id = 'zip-error';
zipErrorMessage.style.display = 'none';
zipErrorMessage.textContent = "Invalid credit zip code. ";
paymentsFieldset.insertBefore(zipErrorMessage, creditCard);
paymentsFieldset.appendChild(zipErrorMessage);

const ccvErrorMessage = document.createElement('span');
ccvErrorMessage.className = 'validation';
ccvErrorMessage.id = 'cvv-error';
ccvErrorMessage.style.display = 'none';
ccvErrorMessage.textContent = "Invalid CVV number. ";
paymentsFieldset.appendChild(ccvErrorMessage);

// Name Field Validation
function nameCheck(){
    const regexCheck = /^\s*$/.test(name.value);

    if (regexCheck) {
        nameErrorMessage.style.display = '';
        return true;
    } else {
        nameErrorMessage.style.display = 'none';
        return false;
    };
};

name.addEventListener('input', () => {
    nameCheck();
});

// Email Field Validation
function emailCheck(){
    const regexCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value);

    if (regexCheck) {
        emailErrorMessage.style.display = 'none';
        return false;
    } else {
        emailErrorMessage.style.display = '';
        return true;
    };
};

email.addEventListener('input', () => {
    emailCheck();    
});

// Credit Card Field Validation
function cardCheck(){
    const regexCheck = /(^[0-9]{12,15})\d$/.test(cardNumber.value);

    if (regexCheck) {
        cardErrorMessage.style.display = 'none';
        return false;
    } else {
        cardErrorMessage.style.display = '';
        return true;
    };
};

cardNumber.addEventListener('input', () => {
    cardCheck();
});

// Zip Code Field Validation
function zipCheck(){
    const regexCheck = /(^[0-9]{4})\d$/.test(zipCode.value);

    if (regexCheck) {
        zipErrorMessage.style.display = 'none';
        return false;
    } else {
        zipErrorMessage.style.display = '';
        return true;
    };
};


zipCode.addEventListener('input', () => {
    zipCheck();
});

// CVV Field Validation
function cvvCheck() {
    const regexCheck = /(^[0-9]{2})\d$/.test(cvv.value);

    if (regexCheck) {
        ccvErrorMessage.style.display = 'none';
        return false;
    } else {
        ccvErrorMessage.style.display = '';
        return true;
    };
};


cvv.addEventListener('input', () => {
   cvvCheck();
});

// Activity Section
const totalCost = document.createElement('p');
let startingCost = 0;
totalCost.textContent = "Total: $" + startingCost;
activities[0].appendChild(totalCost);
const activitiesError = document.getElementById('activities-error');
activitiesError.style.display = "none";
console.log(activitiesError);
const checkboxes = document.querySelectorAll('input[type=checkbox]');

const activitiesFieldset = document.getElementById("activities");
const activitiesErrorMessage = document.createElement('span');
activitiesErrorMessage.className = 'validation';
activitiesErrorMessage.id = 'activities-error';
activitiesErrorMessage.style.display = 'none';
activitiesErrorMessage.textContent = "Must register for at least one activity.";
activities[0].appendChild(activitiesErrorMessage);

activities[0].addEventListener('change', (e) => {
    const checkboxSelection = e.target;
    const datacost = checkboxSelection.getAttribute('data-cost');
    const dateTime = checkboxSelection.getAttribute('data-day-and-time');
    const activityName = checkboxSelection.getAttribute('name');
    console.log(datacost);
    console.log(dateTime);
 
    if (checkboxSelection.checked){
        console.log('checked');
        startingCost += parseInt(datacost);
        console.log(startingCost);
        totalCost.textContent = "Total: $" + startingCost;
    } else {
        console.log('unchecked');
        startingCost -= parseInt(datacost);
        console.log(startingCost);
        totalCost.textContent = "Total: $" + startingCost;
    };


    //Check if activites at the same time are selected.
    for(i = 0; i < checkboxes.length; i++){
    
       let checkboxDateTime = checkboxes[i].getAttribute('data-day-and-time');
       let checkboxName = checkboxes[i].getAttribute('name');

       if(checkboxSelection.checked){
            if(checkboxDateTime == dateTime && activityName !== checkboxName){
                checkboxes[i].disabled = true;
                console.log('checked');
            }; 
       } else if(!checkboxSelection.checked){
            if(checkboxDateTime == dateTime && activityName !== checkboxName){
                checkboxes[i].disabled = false;
                console.log('unchecked');
            }; 
        };
    };
    });

activities[0].addEventListener('input', (e) => {
    if(checkboxCheck() < 1){
        activitiesErrorMessage.style.display = '';
    } else {
        activitiesErrorMessage.style.display = 'none';
    };
});

//Validates if there is at least one checkbox checked
function checkboxCheck() {
    let numberChecked = 0;
    for(i = 0; i < checkboxes.length; i++){
        if(checkboxes[i].checked){
            numberChecked =+ 1;
        };
    };
    return numberChecked;
};

//Submit event listener that runs function to validate fields.
    form.addEventListener('submit', (e) => {
        console.log('test');
       
        if (nameCheck()){
            e.preventDefault();
            console.log('name validation failed');
        };
        
        if (emailCheck()){
            e.preventDefault();
            console.log('Email validation failed');
        };

        if (paymentMethod.value == "credit card" && cardCheck()){
            e.preventDefault();
            console.log('Credit Card validation failed');
        };

        if (paymentMethod.value == "credit card" && zipCheck()){
            e.preventDefault();
            console.log('Zip validation failed');
        };

        if (paymentMethod.value == "credit card" && cvvCheck()){
            e.preventDefault();
            console.log('Cvv validation failed');
        };

        if(checkboxCheck() == 0){
            console.log("Checkbox validation failed");
            activitiesErrorMessage.style.display = '';
        }
    });