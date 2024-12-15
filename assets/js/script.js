'use strict';
const toogleMenu = (menuButton, menu) => {
    const menuButtonEle = document.querySelector(menuButton);
    const menuElement = document.querySelector(menu);
    menuButtonEle.addEventListener('click', (e) => {
        e.stopPropagation();
        menuElement.classList.toggle('open');
        document.body.classList.toggle('ham');
    });
    document.addEventListener('click', (e) => {
        if(!menuElement.contains(e.target) && !menuButtonEle.contains(e.target)){
            menuElement.classList.remove('open');
            document.body.classList.remove('ham');
        };
    });
};
toogleMenu('.menu','.navbar'); 

const PlanEvent = () => {
    const planButton = document.querySelectorAll('.plan-button'),
    planPrice = document.querySelector('.plan-price-amount');

    planButton.forEach((planBtn, index) => {
        planBtn.addEventListener('click', () => {
            planButton.forEach(btn => btn.classList.remove('active-plan'));
           planBtn.classList.add('active-plan');
          let indexClicked = index === 1 ? planPrice.textContent = "$3" : planPrice.textContent = "$4";
        });
    })
};
PlanEvent();