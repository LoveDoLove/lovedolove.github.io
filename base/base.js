function startup(){var e=document.getElementById("encode"),t=document.getElementById("decode"),n=document.getElementById("clean"),c=document.getElementById("copy");e.addEventListener("click",encode),t.addEventListener("click",decode),n.addEventListener("click",clean),c.addEventListener("click",co)}function encode(){var e=document.getElementById("input").value,t=btoa(e);document.getElementById("output").value=t}function clean(){document.getElementById("input").value="",document.getElementById("output").value=""}function decode(){var e=document.getElementById("input").value,t=atob(e);document.getElementById("output").value=t}function co(){var e=document.getElementById("output"),t=document.getElementById("snackbar");""==e.value?(t.innerText="Output is blank",t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3)):(e.select(),e.setSelectionRange(0,99999),navigator.clipboard.writeText(e.value),t.innerText="Output Copied: "+e.value,t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3))}window.onload=startup;