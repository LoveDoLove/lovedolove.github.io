window.onload=start;var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,r,d,a,o,n,c,h="",l=0;for(e=Base64._utf8_encode(e);l<e.length;)t=e.charCodeAt(l++),r=e.charCodeAt(l++),d=e.charCodeAt(l++),a=t>>2,o=(3&t)<<4|r>>4,n=(15&r)<<2|d>>6,c=63&d,isNaN(r)?n=c=64:isNaN(d)&&(c=64),h=h+this._keyStr.charAt(a)+this._keyStr.charAt(o)+this._keyStr.charAt(n)+this._keyStr.charAt(c);return h},decode:function(e){var t,r,d,a,o,n,c,h="",l=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");l<e.length;)a=this._keyStr.indexOf(e.charAt(l++)),o=this._keyStr.indexOf(e.charAt(l++)),n=this._keyStr.indexOf(e.charAt(l++)),c=this._keyStr.indexOf(e.charAt(l++)),t=a<<2|o>>4,r=(15&o)<<4|n>>2,d=(3&n)<<6|c,h+=String.fromCharCode(t),64!=n&&(h+=String.fromCharCode(r)),64!=c&&(h+=String.fromCharCode(d));return Base64._utf8_decode(h)},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var d=e.charCodeAt(r);d<128?t+=String.fromCharCode(d):d>127&&d<2048?(t+=String.fromCharCode(d>>6|192),t+=String.fromCharCode(63&d|128)):(t+=String.fromCharCode(d>>12|224),t+=String.fromCharCode(d>>6&63|128),t+=String.fromCharCode(63&d|128))}return t},_utf8_decode:function(e){for(var t="",r=0,d=c1=c2=0;r<e.length;)(d=e.charCodeAt(r))<128?(t+=String.fromCharCode(d),r++):d>191&&d<224?(t+=String.fromCharCode((31&d)<<6|63&(c2=e.charCodeAt(r+1))),r+=2):(t+=String.fromCharCode((15&d)<<12|(63&(c2=e.charCodeAt(r+1)))<<6|63&(c3=e.charCodeAt(r+2))),r+=3);return t}};function start(){document.getElementById("submit").addEventListener("click",check);var e=document.getElementById("headTitle"),t=document.getElementById("Name"),r=document.getElementById("Mail"),d=document.getElementById("Subject"),a=document.getElementById("Message");e.innerText=Base64.decode("V2VsY29tZSBUbyBTdXBwb3J0IFBhZ2U="),t.innerText=Base64.decode("VXNlcm5hbWUgOiA="),r.innerText=Base64.decode("RW1haWwgOiA="),d.innerText=Base64.decode("UXVlc3Rpb24gVGl0bGUgOiA="),a.innerText=Base64.decode("UXVlc3Rpb24gQ29udGVudCBIZXJlIDog")}function check(){var e=document.getElementById("name"),t=document.getElementById("mail"),r=document.getElementById("subject");""==e.value?alert(Base64.decode("UGxlYXNlIGVudGVyIHVzZXJuYW1lISEh")):""==t.value?alert(Base64.decode("UGxlYXNlIGVudGVyIGVtYWlsISEh")):""==r.value?alert(Base64.decode("UGxlYXNlIGVudGVyIHF1ZXN0aW9uIHRpdGxlISEh")):""!=t.value&&""!=phone.value&&""!=r&&window.alert(Base64.decode("WW91ciBxdWVzdGlvbiB3aWxsIHNlbmQgdG8gYWRtaW4gbm93ISEh"))}