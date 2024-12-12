'use strict';

const toogleMenu = (menuButton, menu) => {
    const menuButtonEle = document.querySelector(menuButton);
    const menuElement = document.querySelector(menu);

    menuButtonEle.addEventListener('click', (e) => {
        menuElement.classList.toggle('open');
        document.body.classList.toggle('ham');
        e.stopPropagation();
    })

    document.addEventListener('click', (e) => {
        if(!menuElement.contains(e.target) && !menuButtonEle.contains(e.target)){
            menuElement.classList.remove('open');
            document.body.classList.remove('ham');
        }
    })
}

toogleMenu('.menu','.navbar');