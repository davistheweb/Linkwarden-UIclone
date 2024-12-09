'use strict';

const toogleMenu = (menuButton, menu) => {
    const menuButtonEle = document.querySelector(menuButton);
    const menuElement = document.querySelector(menu);

    menuButtonEle.addEventListener('click', () => {
        menuElement.classList.toggle('open');
        document.body.classList.toggle('ham')
    })

    document.addEventListener('click', (e) => {
        if(!menuElement.contains(e.target) && !menuButtonEle.contains(e.target)){
            menuElement.classList.remove('open')
        }
    })
}

toogleMenu('.menu','.navbar')