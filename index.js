window.onload = startup;

var Base64= {
	_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";
	var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64
}

else if(isNaN(i)) {
	a=64
}

t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)
}

return t
},decode:function(e) {
var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)
}

if(a!=64) {
t=t+String.fromCharCode(i)
}}

t=Base64._utf8_decode(t);return t
},_utf8_encode:function(e) {
e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)
}

else if(r>127&&r<2048) {
t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)
}

else {
t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)
}}

return t
},_utf8_decode:function(e) {
var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++
}

else if(r>191&&r<224) {
c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2
}

else {
c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3
}}

return t
}}

function startup()
{
   var tag = document.getElementById("tag");
   var yt = document.getElementById("youtube");
   var git = document.getElementById("github");
   var twitter = document.getElementById("twitter");
   var dc = document.getElementById("discord");
   var telegram = document.getElementById("telegram");
   var donate = document.getElementById("donate");
   var main = document.getElementById("main");
   var store = document.getElementById("store");
   var adb = document.getElementById("adb");
   var support = document.getElementById("support");

   var t1 = Base64.decode('QExvdmVEb0xvdmU=');
   var t2 = Base64.decode('WW91dHViZQ==');
   var t3 = Base64.decode('R2l0aHVi');
   var t4 = Base64.decode('VHdpdHRlcg==');
   var t5 = Base64.decode('RGlzY29yZA==');
   var t6 = Base64.decode('VGVsZWdyYW0=');
   var t7 = Base64.decode('RG9uYXRl');
   var t8 = Base64.decode('Q2xpY2sgVG8gU3RhcnQgVXNpbmcgVGhlIFdlYnNpdGU=');
   var t9 = Base64.decode('TG92ZURvTG92ZSBTdG9yZQ==');
   var t10 = Base64.decode('QURCIFR1dG9yaWFs');
   var t11 = Base64.decode('U3VwcG9ydA==');

   yt.addEventListener("click", a);
   git.addEventListener("click", b);
   twitter.addEventListener("click", c);
   dc.addEventListener("click", d);
   telegram.addEventListener("click", e);
   donate.addEventListener("click", f);
   main.addEventListener("click", g);
   store.addEventListener("click", h);
   adb.addEventListener("click", i);
   support.addEventListener("click", j);

   tag.innerText = t1;
   yt.innerText = t2;
   git.innerText = t3;
   twitter.innerText = t4;
   dc.innerText = t5;
   telegram.innerText = t6;
   donate.innerText = t7;
   main.innerText = t8;
   store.innerText = t9;
   adb.innerText = t10;
   support.innerText = t11;
}

function a()
{
   var a = Base64.decode('aHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ2g2WnYzc2ZyYVdoTGlyOW5DWFQ3bnc=');
   window.open(a);
}

function b()
{
   var a = Base64.decode('aHR0cHM6Ly9naXRodWIuY29tL0xvdmVEb0xvdmU=');
   window.open(a);
}

function c()
{
   var a = Base64.decode('aHR0cHM6Ly90d2l0dGVyLmNvbS9Mb3ZlRG9Mb3ZlMQ==');
   window.open(a);
}

function d()
{
   var a = Base64.decode('aHR0cHM6Ly9kaXNjb3JkLmdnLzRiNHVETXFWQ3k=');
   window.open(a);
}

function e()
{
   var a = Base64.decode('aHR0cHM6Ly90Lm1lL0xvdmVEb0xvdmVDaGF0c0dyb3Vw');
   window.open(a);
}

function f()
{
   var a = Base64.decode('aHR0cHM6Ly9iaXQubHkvMzFlVEVYaA==');
   window.open(a);
}

function g()
{
   var a = Base64.decode('L21haW4vbWFpbi5odG1s');
   var openMain = document.src = a;
   window.open(openMain);
}

function h()
{
   var a = Base64.decode('L3N0b3JlL3N0b3JlLmh0bWw=');
   var openStore = document.src = a;
   window.open(openStore);
}

function i()
{
   var a = Base64.decode('L2FkYi9hZGIuaHRtbA==');
   var openAdb = document.src = a;
   window.open(openAdb);
}

function j()
{
   var a = Base64.decode('U2lsbCBpbiBkZXZlbG9waW5nLi4u');
   window.alert(a);
}