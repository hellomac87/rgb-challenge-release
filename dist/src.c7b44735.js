parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({6:[function(require,module,exports) {
var e=document.getElementById("score"),t=document.getElementById("overlayScore"),n=document.querySelectorAll(".answers li"),o=document.getElementById("question"),a=document.getElementById("nextBtn"),c=document.getElementById("againBtn"),r=document.querySelector(".wrong"),l=document.querySelector(".correct"),d=document.querySelector(".overlay"),s=0,i=0;a.addEventListener("click",function(e){newStage(),l.style.display="none",d.style.display="none",n.forEach(function(e){e.classList.remove("show")})}),c.addEventListener("click",function(e){newStage(),r.style.display="none",d.style.display="none",n.forEach(function(e){e.classList.remove("show")}),s=0,handleScore()}),n.forEach(function(e,t){e.addEventListener("click",function(n){i===t?(l.style.display="block",s+=100):r.style.display="block",d.style.display="block",e.classList.add("show"),handleScore()})}),newStage=function(){var e=[createRandomColor(),createRandomColor(),createRandomColor()];i=Math.floor(3*Math.random()),n.forEach(function(t,n){t.style.backgroundColor=e[n],t.classList.remove("active")}),o.textContent=e[i]},createRandomColor=function(){return"rgb("+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+")"},handleScore=function(){e.textContent=s,t.textContent=s},document.addEventListener("DOMContentLoaded",function(){newStage()});
},{}]},{},[6], null)
//# sourceMappingURL=/src.c7b44735.map