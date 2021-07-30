//creating timeline
const tl = gsap.timeline({defaults:{ ease:"power-out"}});

//Intro-animation 
tl.to(".text", {y:"0%", duration:2, stagger:0.25 });

//slider-animation
tl.to(".slider", {y:"-100%", duration:1, delay:0.5 });

//intro-disappear
tl.to(".anim-intro", {y:"-100%", duration:1},"-=1");

//loadin-navbar
tl.fromTo('nav',{opacity: 0}, {opacity: 1, duration: 3});

tl.fromTo('.center-text',{opacity: 0}, {opacity: 1, duration: 2},"-=2");

