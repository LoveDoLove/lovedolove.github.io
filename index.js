function startup(){document.getElementById("about").addEventListener("click",function(){window.open(document.src=Base64.decode("L2Fib3V0L2Fib3V0Lmh0bWw="))}),document.getElementById("main").addEventListener("click",function(){window.open(document.src=Base64.decode("L21haW4vbWFpbi5odG1s"))}),document.getElementById("store").addEventListener("click",function(){window.open(document.src=Base64.decode("L3N0b3JlL3N0b3JlLmh0bWw="))}),document.getElementById("adb").addEventListener("click",function(){window.open(document.src=Base64.decode("L2FkYi9hZGIuaHRtbA=="))}),document.getElementById("base64").addEventListener("click",function(){window.open(document.src=Base64.decode("L2Jhc2UvYmFzZS5odG1s"))}),document.getElementById("support").addEventListener("click",function(){window.open(document.src=Base64.decode("L3N1cHBvcnQvc3UuaHRtbA=="))}),document.getElementById("about").innerHTML=Base64.decode("QWJvdXQgKExvdmVEb0xvdmUp"),document.getElementById("main").innerHTML=Base64.decode("TWFpbiBQYWdl"),document.getElementById("store").innerHTML=Base64.decode("TG92ZURvTG92ZSBTdG9yZQ=="),document.getElementById("adb").innerHTML=Base64.decode("QURCIFR1dG9yaWFs"),document.getElementById("base64").innerHTML=Base64.decode("QmFzZTY0IEVuY29kZXIgJiBEZWNvZGVy"),document.getElementById("support").innerHTML=Base64.decode("Q29udGFjdCBNZQ==")}window.onload=setTimeout(startup,500);var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,n,d,o,r,c,a,i="",m=0;for(e=Base64._utf8_encode(e);m<e.length;)t=e.charCodeAt(m++),n=e.charCodeAt(m++),d=e.charCodeAt(m++),o=t>>2,r=(3&t)<<4|n>>4,c=(15&n)<<2|d>>6,a=63&d,isNaN(n)?c=a=64:isNaN(d)&&(a=64),i=i+this._keyStr.charAt(o)+this._keyStr.charAt(r)+this._keyStr.charAt(c)+this._keyStr.charAt(a);return i},decode:function(e){var t,n,d,o,r,c,a,i="",m=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");m<e.length;)o=this._keyStr.indexOf(e.charAt(m++)),r=this._keyStr.indexOf(e.charAt(m++)),c=this._keyStr.indexOf(e.charAt(m++)),a=this._keyStr.indexOf(e.charAt(m++)),t=o<<2|r>>4,n=(15&r)<<4|c>>2,d=(3&c)<<6|a,i+=String.fromCharCode(t),64!=c&&(i+=String.fromCharCode(n)),64!=a&&(i+=String.fromCharCode(d));return Base64._utf8_decode(i)},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var d=e.charCodeAt(n);d<128?t+=String.fromCharCode(d):d>127&&d<2048?(t+=String.fromCharCode(d>>6|192),t+=String.fromCharCode(63&d|128)):(t+=String.fromCharCode(d>>12|224),t+=String.fromCharCode(d>>6&63|128),t+=String.fromCharCode(63&d|128))}return t},_utf8_decode:function(e){for(var t="",n=0,d=c1=c2=0;n<e.length;)(d=e.charCodeAt(n))<128?(t+=String.fromCharCode(d),n++):d>191&&d<224?(t+=String.fromCharCode((31&d)<<6|63&(c2=e.charCodeAt(n+1))),n+=2):(t+=String.fromCharCode((15&d)<<12|(63&(c2=e.charCodeAt(n+1)))<<6|63&(c3=e.charCodeAt(n+2))),n+=3);return t}};