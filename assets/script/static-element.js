// header menu
const menu_icon = document.querySelector('.menu-icon');
const second_menu = document.querySelector('.second-menu');
const second_menu_close_icon = document.querySelector('.second-menu-close-icon');

menu_icon.addEventListener('click',()=>{
    second_menu.classList.add('active');
    document.body.style.overflowY='hidden';
});

second_menu_close_icon.addEventListener('click',()=>{
    second_menu.classList.remove('active');
    document.body.style.overflowY='auto';
})
// /header menu
// to-top
const toTop = document.querySelector('.to-top');
toTop.addEventListener('click',()=>{
    document.documentElement.scrollTop = 0;
});
window.addEventListener('scroll',()=>{
    if (scrollY > 700){
        toTop.style.display = 'block';
    } else{
        toTop.style.display = 'none';
    }
});
// /to-top