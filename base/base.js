window.onload = startup;

function startup() {
    var a = document.getElementById("encode");
    var b = document.getElementById("decode");
    var c = document.getElementById("clean");
    a.addEventListener("click", encode);
    b.addEventListener("click", decode);
    c.addEventListener("click", clean);
}

function encode() {
    var input = document.getElementById("input").value;
    var encStr = btoa(input);
    document.getElementById("output").value = encStr;
}

function clean() {
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
}

function decode() {
    var input = document.getElementById("input").value;
    var decStr = atob(input);
    document.getElementById("output").value = decStr;
}