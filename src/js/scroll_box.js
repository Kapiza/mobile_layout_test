document.querySelectorAll('.Main_Content').forEach((el) => {
  function update() {
    const max = el.scrollHeight - el.clientHeight;
    const atEnd = max <= 2 || el.scrollTop >= max - 2;
    el.style.setProperty('--mask-bottom', atEnd ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0)');
  }
  el.addEventListener('scroll', update);
  window.addEventListener('resize', update);
  update();
});