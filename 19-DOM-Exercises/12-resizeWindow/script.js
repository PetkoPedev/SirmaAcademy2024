var onresize = function(event) {
    width = event.target.outerWidth;
    height = event.target.outerHeight;
    console.log(width)
    console.log(height)
}
window.addEventListener("resize", onresize);