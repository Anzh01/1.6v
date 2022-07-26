var brandsBlock = document.querySelectorAll('.swiper-wrapper');
var button = document.querySelectorAll('.services__button-more');

button[0].addEventListener('click', function () {
if (brandsBlock[0].clientHeight === 180) {
    brandsBlock[0].classList.add('swiper-wrapper_open');
    brandsBlock[0].classList.remove('swiper-wrapper_close');
    button[0].textContent = 'Скрыть';
    button[0].classList.add('services__button-more_open');
} else {
    brandsBlock[0].classList.remove('swiper-wrapper_open');
    brandsBlock[0].classList.add('swiper-wrapper_close');
    button[0].textContent = 'Показать все';
    button[0].classList.remove('services__button-more_open');
}})

button[1].addEventListener('click', function () {
    if (brandsBlock[1].clientHeight === 180) {
        brandsBlock[1].classList.add('swiper-wrapper_open');
        brandsBlock[1].classList.remove('swiper-wrapper_close');
        button[1].textContent = 'Скрыть';
        button[1].classList.add('services__button-more_open');
    } else {
        brandsBlock[1].classList.remove('swiper-wrapper_open');
        brandsBlock[1].classList.add('swiper-wrapper_close');
        button[1].textContent = 'Показать все';
        button[1].classList.remove('services__button-more_open');
    }})

// console.log(button)
// for (let i = 0; i < button.length; i++) {
//     button = button[i];
//     brandsBlock = brandsBlock[i];
//     button.addEventListener('click', textCollapse)
//     console.log(brandsBlock)
// }

// function textCollapse () {
//     if (brandsBlock.clientHeight === 180) {
//         brandsBlock.classList.add('swiper-wrapper_open');
//         brandsBlock.classList.remove('swiper-wrapper_close');
//         button.textContent = 'Скрыть';
//         button.classList.add('services__button-more_open');
//     } else {
//         brandsBlock.classList.remove('swiper-wrapper_open');
//         brandsBlock.classList.add('swiper-wrapper_close');
//         button.textContent = 'Показать все';
//         button.classList.remove('services__button-more_open');
//     }
// }

const mainText = document.querySelector('.main__text_text-paragraph');
const mainTextButton = document.querySelector('.main__button_read-more');

mainTextButton.addEventListener('click', function () {
    if (mainText.clientHeight <= 180) {
        mainText.classList.add('main__text_open');
        mainText.classList.remove('main__text_close');
        mainTextButton.textContent = 'Свернуть';
        mainTextButton.classList.add('main__button_read-more_open');
    } else {
        mainText.classList.remove('main__text_open');
        mainText.classList.add('main__text_close');
        mainTextButton.textContent = 'Читать далее';
        mainTextButton.classList.remove('main__button_read-more_open');
    }
})
