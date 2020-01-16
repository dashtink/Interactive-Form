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

// ”T-Shirt Info” section


//”Register for Activities” section


//"Payment Info" section


//Form validation


//Form validation messages