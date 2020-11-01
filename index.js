// page wrapper selector, apply overflow when modal is active
const page = document.querySelector('.page');
// container application selector, root element for gallery placement
const container = document.querySelector('#root');
// scroll value variable
let val;

// function [ calculateWindowPosition ]
calculateWindowPosition = () => {

    // assign value with scroll position Y
    val = window.scrollY;

    // test
    console.log(val + 'px');

};

// gallery amsterdam array
galleryAmsterdam = [
    "amsterdam__01.jpg",
    "amsterdam__02.jpg",
    "amsterdam__03.jpg",
    "amsterdam__04.jpg",
    "amsterdam__05.jpg"

];
// gallery singapore array
gallerySingapore = [
    "singapore__01.jpg",
    "singapore__02.jpg",
    "singapore__03.jpg",
    "singapore__04.jpg",
    "singapore__05.jpg"

];
// gallery prague array

// gallery thailand array

// gallery newzealand array


/*
    function [ galleryProperties ]

    creates a section html element to act as a gallery container
    assigns section element with class of gallery, obtains styles from css
    
    counter begins at 1, will compare current count value against galleryAlbum length
    provide initial naming convention for image sources, combine with counter to apply all
    images via array

    creates an image html element to act as an image container
    assigns a click event to each 


*/
galleryProperties = () => {
    
    // create section html element to act as the gallery component
    let gallery = document.createElement('section');
    // provide the section element with a class name of 'gallery'
    gallery.setAttribute('class', 'gallery');

    // provide a value to the end of each image source reference name [ eg : ams__0 + 1 = ams__01 ]
    for (let counter = 1; counter <= galleryAmsterdam.length; counter++) {

        // create an image variable
        let images = document.createElement('img');
        // allocate image source of photo album. Counter adds all images from gallery array
        images.src = '/img/amsterdam__0'+counter+ '.jpg';
        images.setAttribute('class', 'galleryImages');
        
        // attach event listener to images element, init [ modalProperties ] function
        // images.addEventListener('click', modalProperties);

        // append all images to gallery component
        gallery.appendChild(images);

        // test image creation / source allocation
        // console.log(images);
    }
    for (let counter = 1; counter <= gallerySingapore.length; counter++) {

        // create an image variable
        let images = document.createElement('img');

        // allocate image source of photo album. Counter adds all images from gallery array
        images.src = '/img/singapore__0'+counter+ '.jpg';
        
        // append all images to gallery component
        gallery.appendChild(images);

        // test image creation / source allocation
        // console.log(images);
    }

    // append gallery to container element
    container.appendChild(gallery);

    // gallery images class selector [ gallery > children nodes ]
    const galleryImages = document.querySelectorAll('.galleryImages');
    // assign modal props function to each gallery images item
    galleryImages.forEach(galleryImages => galleryImages.addEventListener('click', modalProperties));
    // assign image props function to each gallery images item
    galleryImages.forEach(galleryImages => galleryImages.addEventListener('click', imageProperties));
    
    // let galleryEvent = gallery.children.addEventListener('click', modalProperties);
    // galleryImages.addEventListener('click', modalProperties);
    
    

    // test
    console.log('galleryProperties : initiated [ step 01 ]');

}

modalProperties = () => {
    
    // init [ calculateWindowPosition ] function
    calculateWindowPosition();
    
    // modal element creator [ aside ]
    let modal = document.createElement('aside');
    // set element class to modal
    modal.setAttribute('class', 'modal');
    // set modal position from top [ calculateWindowPosition ] value
    modal.style.top = val + 'px';

    // body selector
    let body = document.querySelector('#body');
    // when modal is loaded, apply overflow hidden to page element
    body.style.overflow = 'hidden';

    // exit button creator
    let exitBtn = document.createElement('button');
    exitBtn.setAttribute('class', 'exitBtn');
    exitBtn.innerHTML = 'x';

    // exit button event listener, close the modal
    exitBtn.addEventListener('click', ()=> {

        if (modal.style.display != 'none') {
            modal.style.display = 'none';
            body.style.overflow = 'auto';
        }
        else {
            modal.style.display = 'flex';

        }

    });

    // append exitBtn to modal
    modal.appendChild(exitBtn);

    // append modal to page
    page.appendChild(modal);
    
    // test
    console.log('modalProperties : initiated [ step 02 ]');
}

imageProperties = () => {

    // test
    console.log('imageProperties : initiated [ step 03 ]');

}

// init gallery props
galleryProperties();
