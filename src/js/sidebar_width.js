const logoWidth = document.querySelector('.logo-wrapper').offsetWidth;

document.documentElement.style.setProperty(
  '--sidebar-collapsed-width',
  `${logoWidth}px`
);