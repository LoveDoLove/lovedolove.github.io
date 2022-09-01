window.onload = init;
window.onload = errorfunction;
window.onload = novideo;


function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Data passes");
      return false;
   }
   document.getElementById("xxx").onclick=turnOnB;
}

function errorfunction()
{
   document.getElementById("error").onclick = function() 
   {
      alert("Still In Developing...");
      return true;
   }
}

function novideo()
{
   document.getElementById("novideo").onclick = function() 
   {
      alert("Old Channel Got Banned\nSo Video Gone Already");
      return true;
   }
}

function turnOnA() {
   document.getElementById("xxx").disabled=false;
}

function turnOnB() {
   document.getElementById("xxx").disabled=true;
}