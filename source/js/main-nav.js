'use strict';

(function () {

  var header = document.querySelector('.page-header');
  var mainNav = header.querySelector('.main-nav');
  var logoWrapper = header.querySelector('.page-header__logo-wrapper');
  var mainNavToggle = header.querySelector('.page-header__nav-toggle');

  mainNav.classList.add('main-nav--close');
  logoWrapper.classList.add('page-header__logo-wrapper--transparent');
  mainNavToggle.classList.add('page-header__nav-toggle--open');

  mainNavToggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    mainNavToggle.classList.toggle('page-header__nav-toggle--close');
    mainNav.classList.toggle('main-nav--close');
    logoWrapper.classList.toggle('page-header__logo-wrapper--transparent');


  });

})();
