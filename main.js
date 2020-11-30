const menuBtn = document.querySelector('.menu-btn'),
    menuUls = document.querySelectorAll('ul');

menuBtn.addEventListener('click', () => {
    menuUls.forEach(menuUl => {
        if (menuUl.style.maxHeight) {
            menuUl.style.maxHeight = null;
        } else {
            menuUl.style.maxHeight = menuUl.scrollHeight + 'px';
        }
    })
});