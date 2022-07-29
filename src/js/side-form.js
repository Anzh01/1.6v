const sideButtonCall = document.querySelector('.side-form__button_call');
const sideButtonFeedback = document.querySelector('.side-form__button_feedback');
const sideFormFeedback = document.querySelector('.side-form-feedback');
const sideFormCall = document.querySelector('.side-form-call');
const buttonCall = document.querySelector('.side-menu__button_call')
const buttonFeedback = document.querySelector('.side-menu__button_feedback')
const container = document.querySelector('.container')

sideButtonCall.addEventListener('click', function () {
    sideFormCall.classList.add('hidden');
    container.classList.remove('side-shadow-form');
})

sideButtonFeedback.addEventListener('click', function () {
    sideFormFeedback.classList.add('hidden');
    container.classList.remove('side-shadow-form');
})

buttonCall.addEventListener('click', function () {
    sideFormCall.classList.remove('hidden');
    container.classList.add('side-shadow-form');
    
})

buttonFeedback.addEventListener('click', function () {
    sideFormFeedback.classList.remove('hidden');
    container.classList.add('side-shadow-form');
})
