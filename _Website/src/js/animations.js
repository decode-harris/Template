const threshold = 0.7; // trigger value
const options = {
    root: null,
    rootMargin: '0px',
    threshold: threshold
};
const observer = new IntersectionObserver(animHandler, options);
const targets = document.querySelectorAll('.container'); // select all section containers
const ar = [].slice.call(targets);
let animations = [];

let count = 0;

for ( let target of ar) {
    animations[count] = new TimelineMax({paused:true});
    observer.observe(target);
    count++;
}

// Set a starting point for each animated element
TweenMax.set('.animated-title', {yPercent:0, xPercent:125});

TweenMax.set('.animated1', {yPercent:0, xPercent:100}); // Animated Odds [ Set Right 100px ]
TweenMax.set('.animated2', {yPercent:0, xPercent:-100}); // Animated Even [ Set Left 100px ]
TweenMax.set('.animated3', {yPercent:0, xPercent:100}); // Animated Odds [ Set Right 100px ]
TweenMax.set('.animated4', {yPercent:0, xPercent:-100}); // Animated Even [ Set Left 100px ]

// Set the trigger threshold distance
TweenMax.set('.trigger', {bottom:threshold * 100 + '%'});

// timeline for each image container
animations[0].to('.animated-title', 0.5, {left: '0%', xPercent:0, ease:Back.easeOut.config(2.1)}, "-=0.1"); // Animated Title [ Right => Left ]
animations[1].to('.animated1', 0.5, {left: '0%', xPercent:0, ease:Back.easeOut.config(1.4)}, "-=0.1"); // Animated Odds [ Right => Left ]
animations[2].to('.animated2', 0.5, {right: '0%', xPercent:0, ease:Back.easeOut.config(1.4)}, "-=0.1"); // Animated Even [ Left => Right ]
animations[3].to('.animated3', 0.5, {left: '0%', xPercent:0, ease:Back.easeOut.config(1.4)}, "-=0.1"); // Animated Odds [ Right => Left ]
animations[4].to('.animated4', 0.5, {right: '0%', xPercent:0, ease:Back.easeOut.config(1.4)}, "-=0.1"); // Animated Even [ Left => Right ]

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