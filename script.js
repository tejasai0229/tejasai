let display = document.getElementById('display');

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  const lastChar = display.value[display.value.length - 1];
  if ("+-*/".includes(lastChar)) {
    display.value = display.value.slice(0, -1);
  }
  display.value += op;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}
