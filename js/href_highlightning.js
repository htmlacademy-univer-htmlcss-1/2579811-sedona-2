window.onload = function () {
    highlightAnchor();

    // Подсветка при переходе по якорной ссылке
    window.addEventListener('hashchange', highlightAnchor);
};

function highlightAnchor() {
    // Убираем подсветку со всех элементов
    const sections = document.querySelectorAll('high');
    sections.forEach(section => {
        section.classList.remove('active-link');
    });

    // Получаем текущий якорь
    const currentAnchor = window.location.hash;
    
    // Если якорь существует, подсвечиваем соответствующий элемент
    if (currentAnchor) {
        const activeSection = document.querySelector(currentAnchor);
        if (activeSection) {
            activeSection.classList.add('active-link');

            // Убираем подсветку через 10 секунд
            setTimeout(() => {
                activeSection.classList.remove('active-link');
            }, 600);
        }

        // Удаляем часть ссылки после #
        const cleanHash = currentAnchor.split('#')[1]; // Получаем часть после #
        if (cleanHash) {
            // Здесь можно сделать что-то с cleanHash, например, вывести в консоль
            console.log('Удалена часть ссылки после #:', cleanHash);
            // Можно также удалить её из URL, если это необходимо
            history.replaceState(null, null, ' ');
        }
    }
}