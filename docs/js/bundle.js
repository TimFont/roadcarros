!function s(a,o,l){function c(t,e){if(!o[t]){if(!a[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var i=o[t]={exports:{}};a[t][0].call(i.exports,function(e){return c(a[t][1][e]||e)},i,i.exports,s,a,o,l)}return o[t].exports}for(var u="function"==typeof require&&require,e=0;e<l.length;e++)c(l[e]);return c}({1:[function(e,t,n){"use strict";var r=e("./helpers/elements"),i=e("./components/Slider");window.onload=function(){if(500<screen.width){var e=new i(r.mainHeader,[{text:"test1, best car ever",img:"./img/slide1.jpg"},{text:"test2, more velocity",img:"./img/slide2.jpg"},{text:"test2, more velocity",img:"./img/slide3.jpg"}]);e.render(),e.start(5e3),window.onscroll=function(){var e=r.navBar.classList;200<pageYOffset?e.add("main-nav--scrolled"):e.remove("main-nav--scrolled")}}else screen.width<500&&(r.mainHeader.style.backgroundImage="url(./img/slide1.jpg)")}},{"./components/Slider":2,"./helpers/elements":3}],2:[function(e,t,n){"use strict";var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();var i=function(){function s(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),this.parent=e,this.content=t,this.state=0,this.slides=[]}return r(s,[{key:"start",value:function(e){var t=this;setInterval(function(){t.nextState()},e)}},{key:"render",value:function(){var e,t=document.createElement("div");t.classList.add("slider");for(var n=1;n<=this.content.length;n++){var r=this.content[n-1],i=void 0;i=1===n?"primary":2===n?"next":"beyond",t.innerHTML+='\n                <div class = "slider__slide slider__slide--'+i+'">\n                    <div class = "slider__image" style = "background-image: url('+r.img+')"></div>\n                    <h1 class = "slider__text">'+r.text+"</h1>\n                </div> \n            "}this.parent.insertBefore(t,this.parent.firstChild),(e=this.slides).push.apply(e,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(this.parent.querySelectorAll(".slider__slide")))}},{key:"nextState",value:function(){var n=this,e=this.content.length,r=this.state===e-1?0:this.state+1,t=r===e-1?0:r+1,i=this.slides[t];i.style.opacity="0",setTimeout(function(){for(var e=0;e<3;e++){var t=n.slides[e];console.log(t),e===n.state?s.transition(t,"beyond","primary"):e===r?s.transition(t,"primary","next"):s.transition(t,"next","beyond")}n.state=r},500),setTimeout(function(){i.style.opacity="1"},1e3)}}],[{key:"transition",value:function(e,t,n){e.classList.add("slider__slide--"+t),e.classList.remove("slider__slide--"+n)}}]),s}();t.exports=i},{}],3:[function(e,t,n){"use strict";var r={navBar:document.querySelector(".main-nav"),mainHeader:document.querySelector(".main-header")};t.exports=r},{}]},{},[1]);