function first_word(tag){
    var e = document.querySelector(tag);
    var s = e.innerHTML;
    var w = s.split(' '); // разбиваем строку на слова по пробелам (split the string into words by spaces)
    var fw = '<span class="first-word">'+w.shift()+'</span>';
    w.unshift(fw);
    var ns = w.join(' ');
    e.innerHTML = ns;
};

first_word('.Мир_Прекрасной_Эпохи h1');