const clear = document.querySelector(".ac");
const buttons = document.querySelector(".buttons");
let resultInput = document.querySelector(".result")

let result = "";

const enterNumbers = (event) => {
  if (event.target.value === "=") {
    result = eval(result).toFixed(1);
    resultInput.value = result;
    return;
  }   

  if (event.target.value === "ac") {
    result = "";
    resultInput.value = result;
    return;
  }
  if (event.target.value === ".") {
    result = "0";
    resultInput.value = result;
    return;
    
  }

result += event.target.value;
resultInput.value = result;

};


buttons.addEventListener("click", enterNumbers, );


