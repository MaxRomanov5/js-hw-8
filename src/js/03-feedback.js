import { throttle } from 'throttle-debounce';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('.feedback-form textarea'),
};


const formData = JSON.parse(localStorage.getItem('feedback-form')) || {

};

refs.form.addEventListener('input', throttle(500,handleInput));
refs.form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form')));
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form');
});
function handleInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form', JSON.stringify(formData));
}
function addLocalData() {
  const localDataForm = JSON.parse(localStorage.getItem('feedback-form'));
  if(localDataForm === null){
    return
  }
  refs.textarea.value = localDataForm['message'] || '';
  refs.input.value = localDataForm['email'] || '';
}
addLocalData();
