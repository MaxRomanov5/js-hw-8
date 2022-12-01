import { throttle } from 'throttle-debounce';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('.feedback-form textarea'),
};
refs.form.addEventListener('input', throttle(500,handleInput));
refs.form.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.clear();
});
function handleInput(e) {
  localStorage.setItem(e.target.name, JSON.stringify(e.target.value));
}
function addLocalData() {
  refs.textarea.value = JSON.parse(localStorage.getItem('message')) || '';
  refs.input.value = JSON.parse(localStorage.getItem('email')) || '';
}
addLocalData();
