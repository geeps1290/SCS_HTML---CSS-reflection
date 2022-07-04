const menu_btn = document.querySelector('.burger-box');
const mobile_menu = document.querySelector('.sidebar');
const main_page = document.querySelector('.main-page');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    main_page.classList.toggle('is-active');
});