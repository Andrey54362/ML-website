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

// Имитация активности пользователей
const onlineSpan = document.getElementById('online-users');

if (onlineSpan) {
    setInterval(() => {
        const randomUsers = Math.floor(Math.random() * 10) + 1;
        onlineSpan.textContent = randomUsers;
    }, 5000);
}

