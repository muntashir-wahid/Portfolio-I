"use strict";

// HTML Elements

const navLinksEl = document.querySelectorAll(".nav_link");
const navMenuEl = document.querySelector('.nav-menu');

// Smooth scrolling using event delegation 
navMenuEl.addEventListener('click', function(e) {
  e.preventDefault();
  if (e.target.classList.contains('nav_link')) {
    const sectionScrollTo = document.querySelector(e.target.getAttribute('href'));
    sectionScrollTo.scrollIntoView({behavior: 'smooth'});
  }
})

/*

// Smooth scrolling 
navLinksEl.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const sectionScrollTo = document.querySelector((this.getAttribute('href')));

    // Old school way
    const sectionCoordinate = sectionScrollTo.getBoundingClientRect();
    window.scrollTo({
      top: sectionCoordinate.top + window.pageYOffset,
      right: sectionCoordinate.right + window.pageXOffset,
      behavior: 'smooth',
    });
    
    // Modern Way
    sectionScrollTo.scrollIntoView({behavior: 'smooth'})
  });
});

*/