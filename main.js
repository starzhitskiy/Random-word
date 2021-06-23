// import { interval } from 'rxjs'

let resultInput = document.querySelector('#amount');
let button = document.querySelector('#btn');

setInterval(() => {
  button.click();
}, 3000)

button.addEventListener('click', () => {

  resultInput.className = '';
  let result = '';
  let str = 'qazwsxedcrfvtgbyhnujmikolp0123456789';
  let reg = /^\d+$/;

  for (let i = 0; i < 5; i++) {
    result += str[getRandom(0, str.length - 1)];
  }

  resultInput.value = result;
  if (result.includes(0)) {
    resultInput.classList.add("transparent")
  } else if (result === result.split('').reverse().join('')) {
    resultInput.classList.add("red");
  } else if (reg.test(result)) {
    resultInput.classList.add("blue");
  }
})

function getRandom(min, max) {
  return Math.floor(Math.random() * max - min + 1) + min;
}



