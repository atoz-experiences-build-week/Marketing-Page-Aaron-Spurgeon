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
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

var $svg = $('.loader-svg').drawsvg({
    duration: 2000,
    reverse: false,
});
$svg.drawsvg('animate');

