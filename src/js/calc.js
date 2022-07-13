let a = ''; // first number
let b = ''; // second number
let sign = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

// экран калькулятора 
const out = document.querySelector('.calc-screen p');

function clearAll () {
  a = ''; //first number result
  b = ''; // second number 
  sign = '', //Знак
  finish = false;
  out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
     //Нажата не кнопка
    if(!event.target.classList.contains('.btn')) return;
    //Нажата кнопка ClearAll ac
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    //Получаю нажатую кнопку
    const key = event.target.textContent;


    //если нажата клавиша 0-9 или .
    if (digit.includes(key)) {
      a+= key;
      console.log( a, b, sign);
      out.textContent = a;
    }
}
