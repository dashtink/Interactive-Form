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

    // Until a theme is selected from the “Design” menu, no color options appear in the “Color” drop down and the “Color” field reads “Please select a T-shirt theme”.

    let color = document.getElementById('color');
    let colorOptions = color.getElementsByTagName
    ('option');

    let colorSelect = document.createElement('OPTION');
    colorSelect.innerHTML = "Please select a T-shirt theme";
    let firstColor = colorOptions[0];
    console.log(firstColor);
    color.insertBefore(colorSelect, firstColor);

    for (i = 0; i < colorOptions.length; i++){   
    if(i > 0){   
    colorOptions[i].style.display = 'none';
    };
    }

    

    //if design theme is blank
        // remove all color options
        // set text to "please select a tshirt"

    //if design theme is JS Puns
        // display "Cornflower Blue," "Dark Slate Grey," and "Gold."
        // hide "Tomato," "Steel Blue," and "Dim Grey."
     // else if design theme is I ♥ JS"
        // display "Tomato," "Steel Blue," and "Dim Grey."
        // hide "Cornflower Blue," "Dark Slate Grey," and "Gold."   

    // When a new theme is selected from the "Design" menu, both the "Color" field and drop down menu is updated.




//”Register for Activities” section


//"Payment Info" section


//Form validation


//Form validation messages