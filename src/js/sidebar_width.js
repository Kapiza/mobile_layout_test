const logoWidth = document.querySelector('.Logo_Wrapper').offsetWidth;

document.documentElement.style.setProperty(
  '--sidebar-collapsed-width',
  `${logoWidth}px`
);

console.log("Logo_width: " + logoWidth)