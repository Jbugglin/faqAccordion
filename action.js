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
const openDetails = document.querySelectorAll('details');
const detailLength = openDetails.length;

for (let i = 0; i < detailLength; i++) {
    openDetails[i].addEventListener('toggle', (Event) => {
        if (openDetails[i].open) {
            alert('open');
        } else {
            alert('not open');
        }
    });
}