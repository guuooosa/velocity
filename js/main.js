const tabsBtns = document.querySelectorAll('.tab-btn__tabs button');
const tabsItems = document.querySelectorAll('.tab-btn__content img');

// функция скрывающая табы и убирает эктивы 

function hideTabs () {
    tabsItems.forEach(item => item.classList.add('hide'));
    tabsBtns.forEach(item => item.classList.remove('tab-btn__tab-active'));
}

function showTab(index) {
    tabsItems[index].classList.remove('hide');
    tabsBtns[index].classList.add('tab-btn__tab-active')
}
hideTabs();
showTab(0);

tabsBtns.forEach((btn, index) => btn.addEventListener('click', () => {
    hideTabs();
    showTab(index);
})) 