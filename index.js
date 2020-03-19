// content selector
const main_content = document.querySelector('.content');

// content logic
let displayIndex = 1;
sc_elmnts(displayIndex);


// button logic
function sc_elmnts(n) {
    displaySc(displayIndex += n);
    
};
// function : display sc elmnts
function displaySc(n) {
    let i;
    let displayPage = document.getElementsByClassName('sc');
    if (n > displayPage.length) {
        displayIndex = 1;
        
    }
    if (n < 1) {
        displayIndex = displayPage.length;
    }
    for (i = 0; i < displayPage.length; i++) {
        displayPage[i].style.display = 'none';
        displayPage[displayIndex-1].style.display = 'grid';
        displayPage[displayIndex-1].style.transition = '3s all ease-in';
    
    }
    
};