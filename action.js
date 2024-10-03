//This will tell if the details block has been opened or toggled. 
//This works for only the first details instance. 
/**
 * 
 * let openDetails = document.querySelector('details');
    openDetails.addEventListener('toggle', (Event) => {
    if (openDetails.open) {
        alert('open');
    } else {
        alert('not open');
    }
});
 */

//Iterate over the details tags to add the event listener.
//This works for all details.
let openDetails = document.querySelector('details');
openDetails.addEventListener('toggle', (Event) => {
    if (openDetails.open) {
        alert('open');
    } else {
        alert('not open');
    }
});


//This gives the plusIcon the event listener and changes it to the minus.
const plusIcon = document.getElementsByClassName('plusIcon');
const plusIconLength = plusIcon.length;
for (let i = 0; i < plusIconLength; i++) {
    plusIcon[i].addEventListener('click', function plusToMinus() {
        plusIcon[i].style.display = 'none';
        minusIcon[i].style.display = 'block';
    });
}

//Gives minusIcon the E.L. and changes the minusIcon to plusIcon
const minusIcon = document.getElementsByClassName('minusIcon');
const minusIconLength = minusIcon.length;
for (let j = 0; j < minusIconLength; j++) {
    minusIcon[j].addEventListener('click', function minusToPlus() {
        plusIcon[j].style.display = 'block';
        minusIcon[j].style.display = 'none';
    });
}