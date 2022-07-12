
// ----- Navigation/Menu ----- //
// ----- Navigation/Menu ----- //
// ----- Navigation/Menu ----- //


const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navSlide = document.querySelector('.mobile-nav-slide');



// ----- toggle nav on mobile ----- //

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === 'false') {
        
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        navSlide.setAttribute('aria-expanded', true);
        navSlide.style.display = 'block';
    
    } else if (visibility === 'true') {
        
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        navSlide.setAttribute('aria-expanded', false);
        navSlide.style.display = 'none';
    }

    console.log("visibility = " + visibility)
});

// ----- menu slide on mobile ----- //

navSlide.addEventListener('click', () => {
    const position = primaryNav.getAttribute('slide-down');
    if (position === 'false') {
        primaryNav.style.transition = '500ms ease-in-out';
        primaryNav.style.paddingTop = '10vh';
        primaryNav.setAttribute('slide-down', true);
        navSlide.style.backgroundImage = "url('/assets/images/arrowDown.png')";
    } else if (position === 'true') {
        primaryNav.style.transition = '500ms ease-in-out';
        primaryNav.style.paddingTop = '30vh';
        primaryNav.setAttribute('slide-down', false);
        navSlide.style.backgroundImage = "url('/assets/images/arrowUp.png')";
        if (window.innerHeight < 450) {
            primaryNav.style.paddingTop = '30vh';
        } else {
            primaryNav.style.paddingTop = '60vh';
        }
    }
    
    console.log('position = ' + position)
});
