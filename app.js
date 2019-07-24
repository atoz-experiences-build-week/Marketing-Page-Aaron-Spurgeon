// SVG animation test

var $svg = $('svg').drawsvg({
    duration: 5000,
    reverse: false,
    stagger: 2000
});
$svg.drawsvg('animate');