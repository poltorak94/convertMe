document.querySelectorAll('textarea').forEach(el => {
    el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
    el.classList.add('modal__form-group-textarea--auto');
    el.addEventListener('input', e => {
        el.style.height = 'modal__form-group-textarea--auto';
        el.style.height = (el.scrollHeight) + 'px';
    });
});
document.querySelector('.modal__form-pseudo-submit').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.modal__form-submit').click()
})
let element = document.querySelector('.modal__form-group-input--tel');
let maskOptions = {
    mask: '+{7}(000)000-00-00'
};
let mask = IMask(element, maskOptions);

document.querySelector('.modal__close').addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
})

const modal = document.querySelector('.modal');
const body = document.querySelector('body');
let closeModal = function () {
    modal.classList.remove('modal--open');
    body.classList.remove('body--modal');
}


window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.modal__container') && !target.closest('.header__nav-list-item--modal')) {
        closeModal();
    }
})
