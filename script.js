// Select the single display input element
const display = document.querySelector(".display");

function appendToDisplay(input) {
  // Append the pressed button's value to the display
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    // Use eval for simplicity (note: eval can be dangerous with untrusted input)
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
}
