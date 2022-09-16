function encode() {
    var input = document.getElementById("userInput").value;
    var encodedString = btoa(input);
    document.getElementById("base64_results").value = encodedString;
}

function eraseText() {
    document.getElementById("userInput").value = "";
    document.getElementById("base64_results").value = "";
}

function decode() {
    var input = document.getElementById("userInput").value;
    var decodedString = atob(input);
    document.getElementById("base64_results").value = decodedString;
}