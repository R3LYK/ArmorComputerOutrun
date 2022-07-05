
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
        primaryNav.style.transition = '300ms ease-out';
        primaryNav.style.paddingTop = '10vh';
        primaryNav.setAttribute('slide-down', true);
        navSlide.style.backgroundImage = "url('/assets/images/arrowDown.png')";
    } else if (position === 'true') {
        primaryNav.style.transition = '300ms ease-out';
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


function sendEmail(){
    Email.send({
        SecureToken : "4ff05753-1662-4adc-94cc-da0393527169",
        To : '<placeholder@email.com>',
        From : "<placeholder@email.com>",
        Subject : "This is the subject",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Subject: " + document.getElementById("subject").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
    message => alert("Message Sent")
    );
}