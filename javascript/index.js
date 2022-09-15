//for notice
function asupport()
{
   document.getElementById("error").onclick = function() 
   {
      alert("Still In Developing...");
      return true;
   }
}

function timing()
{
   var Today = new Date();
   thisDate = Today.getDate();
   thisMonth = Today.getMonth();
   thisYear = Today.getFullYear();
   document.getElementById("todayTime").innerHTML = Today;
}

window.onload = timing;
window.onload = asupport;