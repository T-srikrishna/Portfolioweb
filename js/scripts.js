/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Corrects scroll position when using the back button.
    const scrollToHash = (hash) => {
        // Find the target element using the hash
        const elementToScroll = document.querySelector(hash);
        if (elementToScroll) {
            // A small timeout helps ensure the browser has finished rendering
            // layout changes (like loading images) before it tries to scroll.
            setTimeout(() => {
                elementToScroll.scrollIntoView({
                    behavior: 'auto',
                    block: 'start'
                });
            }, 100);
        }
    };

    // When the hash changes (e.g., from back/forward button), scroll to the new hash.
    window.addEventListener('hashchange', () => {
        scrollToHash(window.location.hash);
    });

});
