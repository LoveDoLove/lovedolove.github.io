//declare
window.onload = init;
window.onload = errorfunction;
window.onload = errorvideo;

//forms
function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Data passes");
      return false;
   }
   document.getElementById("xxx").onclick=turnOnB;
}

//when error clicked
function errorfunction()
{
   document.getElementById("error").onclick = function() 
   {
      alert("Still In Developing...");
      return true;
   }
}

//when no video
function errorvideo()
{
   document.getElementById("novideo").onclick = function() 
   {
      alert("Old Channel Got Banned\nSo Video Gone Already");
      return true;
   }
}


//backup
function example() {
   document.getElementById("xxx").disabled=false;
}

function example() {
   document.getElementById("xxx").disabled=true;
}