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

// Adds an addition option to the Color field and hides color values until the Design Theme is

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