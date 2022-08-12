const cursor = document.querySelector(".cursor");
var timeout;

//follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

//cursor effect on mouse stopped
function mousestopped() {
    cursor.style.display = "none";
}
clearTimeout(timeout);
timeout = setTimeout(mousestopped, 2000);
});

//cursor effect on mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
})