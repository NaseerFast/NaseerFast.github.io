!function(){"use strict";window.onscroll=function(){const e=document.querySelector(".header"),t=e.offsetTop,o=document.querySelector(".navbar-brand img");window.pageYOffset>t?e.classList.add("sticky"):e.classList.remove("sticky"),e.classList.contains("sticky")?o.src="assets/images/logo/logo.jpeg":o.src="assets/images/logo/logo.jpeg";const c=document.querySelector(".back-to-top");document.body.scrollTop>50||document.documentElement.scrollTop>50?c.style.display="flex":c.style.display="none"};document.querySelectorAll(".menu-scroll").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth",offsetTop:-59})}))})),window.document.addEventListener("scroll",(function(e){const t=document.querySelectorAll(".menu-scroll"),o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;for(let e=0;e<t.length;e++){const c=t[e],s=c.getAttribute("href"),l=document.querySelector(s),n=o+73;l.offsetTop<=n&&l.offsetTop+l.offsetHeight>n?(document.querySelector(".menu-scroll").classList.remove("active"),c.classList.add("active")):c.classList.remove("active")}}));let e=document.querySelector(".navbar-toggler");const t=document.querySelector(".navbar-collapse");document.querySelectorAll(".menu-scroll").forEach((o=>o.addEventListener("click",(()=>{e.classList.remove("active"),t.classList.remove("show")})))),e.addEventListener("click",(function(){e.classList.toggle("active"),t.classList.toggle("show")}));document.querySelectorAll(".nav-item-has-children").forEach((e=>{e.querySelector("a").addEventListener("click",(()=>{e.querySelector(".submenu").classList.toggle("show")}))})),(new WOW).init();GLightbox({href:"https://www.youtube.com/watch?v=r44RKWyfcFw",type:"video",source:"youtube",width:900,autoplayVideos:!0});Math.easeInOutQuad=function(e,t,o,c){return(e/=c/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t},document.querySelector(".back-to-top").onclick=()=>{!function(e,t=0,o=500){const c=e.scrollTop,s=t-c;let l=0;const n=()=>{l+=20;const t=Math.easeInOutQuad(l,c,s,o);e.scrollTop=t,l<o&&setTimeout(n,20)};n()}(document.documentElement)}}();