function startup(){document.getElementById("about").addEventListener("click",()=>{setTimeout(()=>{window.location.replace(document.src=Base64.decode("L2Fib3V0L2Fib3V0Lmh0bWw="))},0)}),document.getElementById("main").addEventListener("click",()=>{setTimeout(()=>{window.location.replace(document.src=Base64.decode("L21haW4vbWFpbi5odG1s"))},0)}),document.getElementById("store").addEventListener("click",()=>{setTimeout(()=>{window.location.replace(document.src=Base64.decode("L3N0b3JlL3N0b3JlLmh0bWw="))},0)}),document.getElementById("adb").addEventListener("click",()=>{setTimeout(()=>{window.location.replace(document.src=Base64.decode("L2FkYi9hZGIuaHRtbA=="))},0)}),document.getElementById("base64").addEventListener("click",()=>{setTimeout(()=>{window.location.replace(document.src=Base64.decode("L2Jhc2UvYmFzZS5odG1s"))},0)}),document.getElementById("support").addEventListener("click",()=>{setTimeout(()=>{window.location.replace(document.src=Base64.decode("L3N1cHBvcnQvc3UuaHRtbA=="))},0)}),document.getElementById("about").innerHTML=Base64.decode("QWJvdXQgKExvdmVEb0xvdmUp"),document.getElementById("main").innerHTML=Base64.decode("TWFpbiBQYWdl"),document.getElementById("store").innerHTML=Base64.decode("TG92ZURvTG92ZSBTdG9yZQ=="),document.getElementById("adb").innerHTML=Base64.decode("QURCIFR1dG9yaWFs"),document.getElementById("base64").innerHTML=Base64.decode("QmFzZTY0IEVuY29kZXIgJiBEZWNvZGVy"),document.getElementById("support").innerHTML=Base64.decode("Q29udGFjdCBNZQ==")}window.onload=setTimeout(startup,500);var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,d,o,r,n,c,a,i="",m=0;for(e=Base64._utf8_encode(e);m<e.length;)t=e.charCodeAt(m++),d=e.charCodeAt(m++),o=e.charCodeAt(m++),r=t>>2,n=(3&t)<<4|d>>4,c=(15&d)<<2|o>>6,a=63&o,isNaN(d)?c=a=64:isNaN(o)&&(a=64),i=i+this._keyStr.charAt(r)+this._keyStr.charAt(n)+this._keyStr.charAt(c)+this._keyStr.charAt(a);return i},decode:function(e){var t,d,o,r,n,c,a,i="",m=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");m<e.length;)r=this._keyStr.indexOf(e.charAt(m++)),n=this._keyStr.indexOf(e.charAt(m++)),c=this._keyStr.indexOf(e.charAt(m++)),a=this._keyStr.indexOf(e.charAt(m++)),t=r<<2|n>>4,d=(15&n)<<4|c>>2,o=(3&c)<<6|a,i+=String.fromCharCode(t),64!=c&&(i+=String.fromCharCode(d)),64!=a&&(i+=String.fromCharCode(o));return Base64._utf8_decode(i)},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",d=0;d<e.length;d++){var o=e.charCodeAt(d);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(e){for(var t="",d=0,o=c1=c2=0;d<e.length;)(o=e.charCodeAt(d))<128?(t+=String.fromCharCode(o),d++):o>191&&o<224?(t+=String.fromCharCode((31&o)<<6|63&(c2=e.charCodeAt(d+1))),d+=2):(t+=String.fromCharCode((15&o)<<12|(63&(c2=e.charCodeAt(d+1)))<<6|63&(c3=e.charCodeAt(d+2))),d+=3);return t}};