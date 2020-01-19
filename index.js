const main_content = document.querySelector('.content');


let slideIndex = 1;
showSlides(slideIndex);

function slidePanels(n) {
    showSlides(slideIndex += n);
    // showSlides(slideIndex -= n);
};
function showSlides(n) {
    let i;
    let slidesDisplay = document.getElementsByClassName('slides');
    if (n > slidesDisplay.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slidesDisplay.length;
    }
    for (i = 0; i < slidesDisplay.length; i++) {
        slidesDisplay[i].style.display = 'none';
        slidesDisplay[slideIndex-1].style.display = 'grid';
    }
    
};






// main_content.addEventListener('scrollDown', nextSlide());
// main_content.addEventListener('scrollUp', prevSlide());

// function nextSlide() {
//     slides[i]++;
// };
// function prevSlide() {
//     slides[i]++;
// };
