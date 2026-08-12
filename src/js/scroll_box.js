// 1. Находим абсолютно ВСЕ элементы с этим классом
const boxes = document.querySelectorAll('.scroll_box');

// 2. Перебираем каждый найденный блок
boxes.forEach((box) => {
  
  // Создаем функцию обработки скролла ИМЕННО для этого конкретного блока (box)
  function handleScroll() {
    const scrollTop = box.scrollTop;
    const maxScroll = box.scrollHeight - box.clientHeight;

    // Проверяем, нужен ли вообще скролл (если текст целиком влезает в блок)
    if (maxScroll <= 0) {
      box.style.setProperty('--mask-top', 'rgba(0, 0, 0, 1)');
      box.style.setProperty('--mask-bottom', 'rgba(0, 0, 0, 1)');
      return;
    }

    const topOpacity = scrollTop <= 2 ? 1 : 0;
    const bottomOpacity = scrollTop >= maxScroll - 2 ? 1 : 0;

    box.style.setProperty('--mask-top', `rgba(0, 0, 0, ${topOpacity})`);
    box.style.setProperty('--mask-bottom', `rgba(0, 0, 0, ${bottomOpacity})`);
  }

  // 3. Вешаем слушатели событий на этот конкретный блок
  box.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
  
  // Инициализируем маску для этого блока при старте
  handleScroll(); 
});
