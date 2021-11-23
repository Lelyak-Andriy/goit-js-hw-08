import throttle from 'lodash.throttle';

const formData = {};

localStorage.setItem('feedback-form-state', JSON.stringify(formData));

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea'),
    input: document.querySelector('input')
}

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.input.addEventListener('input', throttle(onInputInput, 500));

refs.form.addEventListener('input', evt => {
    // console.log(evt.target.name);
    // console.log(evt.target.value);

    formData[evt.target.name] = evt.target.value

    console.log(formData);
})

populateTextarea()
populateEmail()


function onFormSubmit(evt) { 
evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-msg','feedback-email')
}

function onTextareaInput(evt) { 
const message = evt.target.value;

localStorage.setItem('feedback-msg', message);
}

function onInputInput(evt) { 
const email = evt.target.value;

    localStorage.setItem('feedback-email', email);
}


function populateTextarea() {
    const savedMessage = localStorage.getItem('feedback-msg');
    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
    }
}

function populateEmail() {
    const savedEmail = localStorage.getItem('feedback-email');
    if (savedEmail) {
        console.log(savedEmail);
        refs.input.value = savedEmail;
    }
    
 }
