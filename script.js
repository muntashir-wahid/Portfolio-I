"use strict";

// HTML Elements

const navLinksEl = document.querySelectorAll(".nav_link");
// console.log(navLinksEl);

navLinksEl.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const sectionScrollTo = document.querySelector((link.getAttribute('href')));

    /*
    // Old school way
    const sectionCoordinate = sectionScrollTo.getBoundingClientRect();
    window.scrollTo({
      top: sectionCoordinate.top + window.pageYOffset,
      right: sectionCoordinate.right + window.pageXOffset,
      behavior: 'smooth',
    });
    */

    sectionScrollTo.scrollIntoView({behavior: 'smooth'})
  });
});
