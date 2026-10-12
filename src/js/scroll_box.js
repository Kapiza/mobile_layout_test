document.querySelectorAll('.Main_Content').forEach((el) => {
  const FADE_RANGE = 50; // за сколько px до конца туман полностью исчезает

  function update() {
    const max = el.scrollHeight - el.clientHeight;
    const left = max - el.scrollTop;                 // сколько осталось доскроллить
    const alpha = max <= 2 ? 1 : Math.min(1, Math.max(0, 1 - left / FADE_RANGE));
    el.style.setProperty('--mask-bottom', `rgba(0,0,0,${alpha})`);
  }

  el.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
});