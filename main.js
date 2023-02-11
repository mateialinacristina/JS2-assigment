const resultField = document.getElementById("result");
let result = "";

function addNumber(num) {
  result += num;
  resultField.value = result;
}

function add() {
  result += "+";
  resultField.value = result;
}

function subtract() {
  result += "-";
  resultField.value = result;
}

function multiply() {
  result += "*";
  resultField.value = result;
}

function divide() {
  result += "/";
  resultField.value = result;
}

function clearResult() {
  result = "";
  resultField.value = "";
}

function calculate() {
    try {
      result = eval(result);
      if (result === Infinity) {
        throw "Oops,can't divide by 0!";
      }
      result = Math.round(result * 100) / 100;
      resultField.value = result;
    } catch (error) {
      resultField.value = error;
    }
  }
  
