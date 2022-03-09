"use strict";

// HTML Elements

const navBar = document.querySelector('.nav-bar');
const navLinksEl = document.querySelectorAll(".nav_link");
const navMenuEl = document.querySelector('.nav-menu');
const heroSection = document.getElementById('hero');
const allSections = document.querySelectorAll('.section');
console.log(allSections)

// Smooth scrolling using event delegation 
navMenuEl.addEventListener('click', function(e) {
  e.preventDefault();
  if (e.target.classList.contains('nav_link')) {
    const sectionScrollTo = document.querySelector(e.target.getAttribute('href'));
    sectionScrollTo.scrollIntoView({behavior: 'smooth'});
  }
});

// Sticky nav using the Intersection observer API

const stickyNav = function(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navBar.classList.add('sticky-nav');
  } else {
    navBar.classList.remove('sticky-nav');
  }
  ovserver.unobserve(navBar);
}

const ovserver = new IntersectionObserver(stickyNav, {
  root: null, 
  threshold: 0,
});
ovserver.observe(heroSection);

// Reveal sections 

const revealSection = function(entries, observer) {
  const [entry] = entries;
  console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.remove('section-hidden');
      observer.unobserve(entry.target);
    }; 
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section-hidden');
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