"use strict";var elements={navBar:document.querySelector(".main-nav"),slider:document.querySelector(".home-slider")};window.addEventListener("scroll",function(){var e=elements.navBar.classList;200<pageYOffset?e.add("main-nav--scrolled"):e.remove("main-nav--scrolled")});var bannerStatus=1,bannerTimer=8e3;window.onload=function(){bannerLoop()};var startBannerLoop=setInterval(function(){bannerLoop()},bannerTimer);function bannerLoop(){function e(e,t,n){document.querySelector(".home-slider__slide--"+e).style.right=t+"%",document.querySelector(".home-slider__slide--"+e).style.zIndex=""+n}1===bannerStatus?(document.querySelector(".home-slider__slide--2").style.opacity="0",setTimeout(function(){e(1,0,-2),e(2,-100,-1),e(3,100,-3)},500),setTimeout(function(){document.querySelector(".home-slider__slide--2").style.opacity="1"},1e3),bannerStatus=2):2===bannerStatus?(document.querySelector(".home-slider__slide--3").style.opacity="0",setTimeout(function(){e(1,100,-3),e(2,0,-2),e(3,-100,-1)},500),setTimeout(function(){document.querySelector(".home-slider__slide--3").style.opacity="1"},1e3),bannerStatus=3):3===bannerStatus&&(document.querySelector(".home-slider__slide--1").style.opacity="0",setTimeout(function(){e(1,-100,-1),e(2,100,-3),e(3,0,-2)},500),setTimeout(function(){document.querySelector(".home-slider__slide--1").style.opacity="1"},1e3),bannerStatus=1)}