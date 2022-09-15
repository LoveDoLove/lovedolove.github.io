window.onload = startup;

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

   tag.innerText = "@LoveDoLove";
   yt.innerText = "Youtube";
   git.innerText = "Github";
   twitter.innerText = "Twitter";
   dc.innerText = "Discord";
   telegram.innerText = "Telegram";
   donate.innerText = "Donate";
   main.innerText = "Click To Start Using The Website";
   store.innerText = "LoveDoLove Store";
   adb.innerText = "ADB Tutorial";
   support.innerText = "Support";
}

function a()
{
   window.open("https://www.youtube.com/channel/UCh6Zv3sfraWhLir9nCXT7nw");
}

function b()
{
   window.open("https://github.com/LoveDoLove");
}

function c()
{
   window.open("https://twitter.com/LoveDoLove1");
}

function d()
{
   window.open("https://discord.gg/4b4uDMqVCy");
}

function e()
{
   window.open("https://t.me/LoveDoLoveChatsGroup");
}

function f()
{
   window.open("https://bit.ly/31eTEXh");
}

function g()
{
   var openMain = document.src = "/main/main.html";
   window.open(openMain);
}

function h()
{
   var openStore = document.src = "/store/store.html";
   window.open(openStore);
}

function i()
{
   var openAdb = document.src = "/adb/adb.html";
   window.open(openAdb);
}

function j()
{
   window.alert("Sill in developing...");
}