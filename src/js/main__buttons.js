const sideButtonCall = document.querySelector('.side-form__button_call');
const sideButtonFeedback = document.querySelector('.side-form__button_feedback');
const sideFormFeedback = document.querySelector('.side-form-feedback');
const sideFormCall = document.querySelector('.side-form-call');
const mainButtonCall = document.querySelector('.main__buttons_call')
const mainButtonFeedback = document.querySelector('.main__buttons_feedback')
const container = document.querySelector('.container')

sideButtonCall.addEventListener('click', function () {
    sideFormCall.classList.add('hidden');
    container.classList.remove('side-shadow');
})

sideButtonFeedback.addEventListener('click', function () {
    sideFormFeedback.classList.add('hidden');
    container.classList.remove('side-shadow');
})

mainButtonCall.addEventListener('click', function () {
    sideFormCall.classList.remove('hidden');
    container.classList.add('side-shadow');
    
})

mainButtonFeedback.addEventListener('click', function () {
    sideFormFeedback.classList.remove('hidden');
    container.classList.add('side-shadow');
})