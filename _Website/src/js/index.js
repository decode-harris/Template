const nav_list = document.querySelector('.nav-list'); // select the navigation list element
console.log('Test navigation list element : ' + nav_list); // test the selection method
nav_list.style.opacity = '0'; // hide element from view

const nav_btn = document.querySelector('#nav-btn'); // select the navigation event button
nav_btn.addEventListener('click', ()=> { // apply an event listener to the navigation button

    // validate navigation list properties
    if (nav_list.style.opacity == '0') {

        nav_list.style.opacity = '1'; // apply a visible value to the nav list element
        nav_btn.innerHTML = 'close'; // change the menu to the close text/icon

        // test validation
        console.log('Navigation Props Validation : If ( Visible Props Applied');
    }
    else {
        nav_list.style.opacity = '0'; // revert menu properties back to default
        nav_btn.innerHTML = 'menu'; // revert menu button text/icon to default

        // test validation
        console.log('Navigation Props Validation : Else ( Default Props Applied');
    }

    // test event
    console.log('Menu button Clicked');
    
});

// gsap.from('.image-container', {x: 50, duration: 1});
// gsap.to(".image-container", {x: 0, duration: 1, delay: 3});


const threshold = 0.7; // trigger value
const options = {
    root: null,
    rootMargin: '0px',
    threshold: threshold
};
const observer = new IntersectionObserver(animHandler, options);
const targets = document.querySelectorAll('.image-container');
const ar = [].slice.call(targets);
let animations = [];

let count = 0;

for ( let target of ar) {
    animations[count] = new TimelineMax({paused:true});
    observer.observe(target);
    count++;
}

TweenMax.set('.img-sml', {yPercent:-50, xPercent:-50});
TweenMax.set('.trigger', {bottom:threshold * 100 + '%'});

// timeline for each image container
animations[0].to('.img-sml', 0.5, {left: '50%', xPercent:-50, ease:Back.easeOut.config(1.4)}, "-=0.1");
animations[1].to('.img-sml', 0.5, {left: '50%', xPercent:-50, ease:Back.easeOut.config(1.4)}, "-=0.1");
animations[2].to('.img-sml', 0.5, {left: '50%', xPercent:-50, ease:Back.easeOut.config(1.4)}, "-=0.1");
animations[3].to('.img-sml', 0.5, {left: '50%', xPercent:-50, ease:Back.easeOut.config(1.4)}, "-=0.1");

// observer handler
function animHandler(targets, observer) {
    for (var entry of targets) {
        if (entry.isIntersecting) {
            let i = ar.indexOf(entry.target);
            animations[i].play();
        } else {
            return;
        }
    }
}
