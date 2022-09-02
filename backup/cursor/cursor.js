const cursor = document.querySelector(".cursor");
var timeout;

//follow
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    //stop
    function mouseStopped(){
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
})

//effect mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
})