
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
        navSlide.style.display = 'none';
    }

    console.log(visibility)
});

// ----- menu slide on mobile ----- //

navSlide.addEventListener('click', () => {
    const position = primaryNav.getAttribute('slide-down');
    if (position === 'false') {
        primaryNav.style.transition = "300ms ease-out";
        primaryNav.style.padding = "min(60vh, 45rem) 5rem";
        primaryNav.setAttribute('slide-down', true);
        navSlide.style.backgroundImage = "url('/assets/images/arrowUp.png')";
    } else if (position === 'true') {
        primaryNav.style.transition = "300ms ease-out";
        primaryNav.style.padding = "min(25vh, 12rem) 5rem";
        primaryNav.setAttribute('slide-down', false);
        navSlide.style.backgroundImage = "url('/assets/images/arrowDown.png')";
    }
    
    console.log("position = " + position)
});


// ----- Content Positioning / Background Changes ----- //
// ----- Content Positioning / Background Changes ----- //
// ----- Content Positioning / Background Changes ----- //

const windowSelect = document.querySelector('.windows');
const mediaQuery = window.matchMedia('(max-width: 420px)');

if (window.location.href.indexOf("services") && mediaQuery === true) {
    windowSelect.style.color = 'rgb(85, 85, 81)';
}