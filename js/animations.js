TweenMax.to(".loader h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
});

TweenMax.to(".loader", 2, {
    delay: 1,
    top: "-100%",
    ease: Expo.easeInOut
})