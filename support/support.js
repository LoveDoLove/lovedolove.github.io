//declare
window.onload = init;

//forms
function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Data passes");
      return false;
   }
   document.getElementById("xxx").onclick=turnOnB;
}
//backup
function example() {
   document.getElementById("xxx").disabled=false;
}

function example() {
   document.getElementById("xxx").disabled=true;
}