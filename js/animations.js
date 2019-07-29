// animated draw svg using drawsvg.js
var $svg = $('.loader-svg').drawsvg({
    duration: 2000,
    reverse: false,
});
$svg.drawsvg('animate');







// on screen animations using greensock/tweenmax
TweenMax.to(".loader-svg", .2, {
    opacity: 1,
});

TweenMax.to(".loader h1 .loader-svg", 3, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
});

TweenMax.to(".loader", 3, {
    delay: 1,
    top: "-120%",
    ease: Expo.easeInOut
});

TweenMax.from(".title-svg", 2, {
    delay: 2.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom("nav a", 1, {
    delay: 3,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
}, 0.3);

TweenMax.from(".landing-top h1", 2, {
    delay: 3.2,
    opacity: 0,
    x: -40,
    ease: Expo.easeInOut
});

TweenMax.from(".landing-top p", 2, {
    delay: 3.6,
    opacity: 0,
    x: -40,
    ease: Expo.easeInOut
});

TweenMax.from(".landing-top button", 2, {
    delay: 4,
    opacity: 0,
    x: -40,
    ease: Expo.easeInOut
});

TweenMax.from(".landing i", 2, {
    delay: 3.2,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
});

TweenMax.from(".landing .button-text", 2, {
    delay: 3.4,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
});








