function startup(){var e=document.getElementById("about"),t=document.getElementById("main"),r=document.getElementById("store"),n=document.getElementById("adb"),d=document.getElementById("base64");e.addEventListener("click",ag),t.addEventListener("click",g),r.addEventListener("click",h),n.addEventListener("click",i),d.addEventListener("click",j),e.innerText=Base64.decode("QWJvdXQgTWUgKExvdmVEb0xvdmUp"),t.innerText=Base64.decode("Q2xpY2sgVG8gU3RhcnQgVXNpbmcgVGhlIFdlYnNpdGU="),r.innerText=Base64.decode("TG92ZURvTG92ZSBTdG9yZQ=="),n.innerText=Base64.decode("QURCIFR1dG9yaWFs"),d.innerText=Base64.decode("QmFzZTY0IEVuY29kZXIgJiBEZWNvZGVy")}function ag(){window.open(document.src=Base64.decode("L2Fib3V0L2Fib3V0Lmh0bWw="))}function g(){window.open(document.src=Base64.decode("L21haW4vbWFpbi5odG1s"))}function h(){window.open(document.src=Base64.decode("L3N0b3JlL3N0b3JlLmh0bWw="))}function i(){window.open(document.src=Base64.decode("L2FkYi9hZGIuaHRtbA=="))}function j(){window.open(document.src=Base64.decode("L2Jhc2UvYmFzZS5odG1s"))}window.onload=startup;var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,r,n,d,o,c,a,i="",h=0;for(e=Base64._utf8_encode(e);h<e.length;)t=e.charCodeAt(h++),r=e.charCodeAt(h++),n=e.charCodeAt(h++),d=t>>2,o=(3&t)<<4|r>>4,c=(15&r)<<2|n>>6,a=63&n,isNaN(r)?c=a=64:isNaN(n)&&(a=64),i=i+this._keyStr.charAt(d)+this._keyStr.charAt(o)+this._keyStr.charAt(c)+this._keyStr.charAt(a);return i},decode:function(e){var t,r,n,d,o,c,a,i="",h=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");h<e.length;)d=this._keyStr.indexOf(e.charAt(h++)),o=this._keyStr.indexOf(e.charAt(h++)),c=this._keyStr.indexOf(e.charAt(h++)),a=this._keyStr.indexOf(e.charAt(h++)),t=d<<2|o>>4,r=(15&o)<<4|c>>2,n=(3&c)<<6|a,i+=String.fromCharCode(t),64!=c&&(i+=String.fromCharCode(r)),64!=a&&(i+=String.fromCharCode(n));return Base64._utf8_decode(i)},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t+=String.fromCharCode(n):n>127&&n<2048?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t},_utf8_decode:function(e){for(var t="",r=0,n=c1=c2=0;r<e.length;)(n=e.charCodeAt(r))<128?(t+=String.fromCharCode(n),r++):n>191&&n<224?(t+=String.fromCharCode((31&n)<<6|63&(c2=e.charCodeAt(r+1))),r+=2):(t+=String.fromCharCode((15&n)<<12|(63&(c2=e.charCodeAt(r+1)))<<6|63&(c3=e.charCodeAt(r+2))),r+=3);return t}};