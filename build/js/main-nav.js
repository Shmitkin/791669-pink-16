"use strict";!function(){var e=document.querySelector(".page-header"),a=e.querySelector(".main-nav"),r=e.querySelector(".page-header__logo-wrapper"),t=e.querySelector(".page-header__nav-toggle");a.classList.add("main-nav--close"),r.classList.add("page-header__logo-wrapper--transparent"),t.classList.add("page-header__nav-toggle--open"),t.addEventListener("click",function(e){e.preventDefault(),t.classList.toggle("page-header__nav-toggle--close"),a.classList.toggle("main-nav--close"),r.classList.toggle("page-header__logo-wrapper--transparent")})}();