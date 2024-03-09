const sign_up_section = document.querySelector('.sign-up');
const log_in_section = document.querySelector('.log-in');
const forms = document.querySelectorAll('form');
const change = (
    add_active,
    add_deactive,
    remove_hide,
    remove_active,
    remove_deactive,
    add_hide,
) => {
    add_deactive.classList.add('deactive');
    add_active.classList.add('active');
    forms[remove_hide].classList.remove('hide');
    if (sign_up_section.classList.contains('active')){
        remove_active.classList.remove('active');
        remove_deactive.classList.remove('deactive');
        forms[add_hide].classList.add('hide');
    }
}
sign_up_section.addEventListener('mouseover',()=>{
    change(
        sign_up_section,
        log_in_section,
        0,
        log_in_section,
        sign_up_section,
        1
    );
});
log_in_section.addEventListener('mouseover',()=>{
    change(
        log_in_section,
        sign_up_section,
        1,
        sign_up_section,
        log_in_section,
        0
    );
});



