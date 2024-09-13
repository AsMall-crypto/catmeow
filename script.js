var profile=document.querySelector("#profile");
var title=document.querySelector("#title");
var description=document.querySelector("#description");
var btnyes=document.querySelector("#btnyes");
var btnno=document.querySelector("#btnno");
var happycat=new Audio("../Image/audio/happy-happy-happy-song.mp3");
var sadcat=new Audio("../Image/audio/hamster dry drag.mp3");
profile.src="../Image/dog holding flower.jpg";
profile.alt="Profile not found";
title.innerHTML="- Lysorng";
description.innerHTML="Be Mine..?💌"
btnyes.innerHTML="Oh Yes!";
btnno.innerHTML="No way!"
btnyes

btnyes.addEventListener("click",()=>{
  profile.src="../Image/GIF/happy happy cat.gif"
  description.innerHTML="ヾ(≧ ▽ ≦)ゝ"
  sadcat.pause();
  happycat.play();

})
btnno.addEventListener("click",()=>{
  profile.src="../Image/GIF/sobbing-sob.gif"
  description.innerHTML="(┬┬﹏┬┬)"
  happycat.pause();
  sadcat.play();

})