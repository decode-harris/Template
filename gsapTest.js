const threshold = 0.7; // trigger value
const options = {
    root: null, // set root to null
    rootMargin: '0px', // set root margin to 0px
    threshold: threshold // set threshold to global threshold variable
};
const observer = new IntersectionObserver(animHandler, options); // create an intersection observer for page elements
const targets = document.querySelectorAll('.container'); // select all container elements
const ar = [].slice.call(targets); // create an array consisting of all container elements

let animations = []; // set an empty array for the timeline animations
let count = 0; // set the count value to zero [ default ]

for ( let target of ar ) {
    // Apply a new timeline to each targeted element
    animations[count] = new TimelineMax({paused:true});

    // Set the observer to observe the target [ Current Container Element ]
    observer.observe(target);

    // Add to the count value
    count++;
}

// Set Odds as [ Animation : Right => Left ]
TweenMax.set('.box1', {yPercent:0, xPercent:50});
TweenMax.set('.box3', {yPercent:0, xPercent:50});

// Set Evens as [ Animation : Left => Right ]
TweenMax.set('.box2', {yPercent:0, xPercent: -50});
TweenMax.set('.box4', {yPercent:0, xPercent:-50});

TweenMax.set('.trigger', {bottom:threshold * 100 + '%'}); // Enable Tweens via trigger intersection

// Animations Timeline [ Odds Classes, Even Animations Array ]
animations[0].to('.box1', 0.5, {left: '50%', xPercent:0, ease:Back.easeOut.config(1.4)}, "-=0.1");
animations[2].to('.box3', 0.5, {left: '50%', xPercent:0, ease:Back.easeOut.config(1.4)}, "-=0.1");

// Animations Timeline [ Even Classes, Odds Animations Array ]
animations[1].to('.box2', 0.5, {right: '50%', xPercent:0, ease:Back.easeOut.config(1.4)}, "-=0.1");
animations[3].to('.box4', 0.5, {right: '50%', xPercent:0, ease:Back.easeOut.config(1.4)}, "-=0.1");

// observer handler
function animHandler(targets, observer) {

    // loop through all targets [ container element ]
    for (var entry of targets) {

        // validate if a target is intersection with the page observer
        if (entry.isIntersecting) {

            // select the current intersecting target
            let i = ar.indexOf(entry.target);

            // set the animation to play the current target
            animations[i].play();
        } else {

            // return out of validation
            return;
        }
    }
}