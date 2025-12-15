// Запрет выделения текста
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
});

// Запрет копирования
document.addEventListener('copy', function (e) {
    e.preventDefault();
    alert('Копирование контента запрещено.');
});

// Блокировка горячих клавиш
document.addEventListener('keydown', function (e) {
    if (
        (e.ctrlKey && e.key === 'c') ||
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.key === 's') ||
        (e.ctrlKey && e.shiftKey && e.key === 'i')
    ) {
        e.preventDefault();
        alert('Действие запрещено.');
    }
});
