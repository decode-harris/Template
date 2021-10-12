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