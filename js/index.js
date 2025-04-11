const form = document.querySelector('.app');
const font = document.querySelector('.font-app');

$('.cons-p').click(function (e) { 
    e.preventDefault();

    if (!form.classList.contains('active')) {
        // Открытие формы
        form.classList.add('active');
        form.classList.remove('noactive');
        form.style.animation = "fadeInDown 1s forwards";
        font.classList.add('active'); // Активируем фон
    } else {
        // Закрытие формы
        closeForm();
    }
});

$('.cn-bth-close').click(function (e) { 
    e.preventDefault();
    closeForm();
});

function closeForm() {
    if (form.classList.contains('active')) {
        form.style.animation = "fadeOutUp 1s forwards";

        // Добавим обработчик события завершения анимации
        form.addEventListener('animationend', function() {
            form.classList.add('noactive');
            form.classList.remove('active');
            font.classList.remove('active'); 
        }, { once: true }); // Удалим обработчик после первого срабатывания
    }
}

// Закрытие формы кликом на фон
$('.font-app').click(function (e) {
    // Проверяем, не был ли клик произведен на самой форме или на элементах внутри нее
    if (!$(e.target).closest('.app').length) { // '.app' - это класс вашей формы
        closeForm();
    }
});