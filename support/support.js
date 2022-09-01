window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Data passes");
      return false;
   }
   
   document.getElementById("xxx").onclick = turnOnA;
   document.getElementById("xxx").onclick=turnOnB;
}

function turnOnA() {
   document.getElementById("xxx").disabled=false;
}

function turnOnB() {
   document.getElementById("xxx").disabled=true;
}