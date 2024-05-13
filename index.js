const operation = document.getElementById("operation");
const screenCurrent = document.getElementById("operationAnswer");
const plusMinus = document.getElementById("plusMinus");
const deletePrev = document.getElementById("deletePrev");
const scientific = document.getElementById("scientific");
const standard = document.getElementById("standard");
const calculatorContainer = document.querySelector(".calculatorContainer");
const buttonContainer = document.querySelector(".buttonContainer");
const scientificHidden = document.querySelectorAll(".scientificHidden");
const grid = document.querySelectorAll(".grid");

function appendToDisplay(char) {
  operation.textContent += char;
}

function calculate() {
  const expression = operation.textContent;
  try {
    const result = Function(`return ${expression}`)();
    screenCurrent.textContent = result;
  } catch (error) {
    screenCurrent.textContent = "Error";
  }
}

plusMinus.addEventListener("click", () => {
  const currentValue = parseFloat(operation.innerText);
  const newValue = `-(${currentValue})`;
  operation.innerHTML = newValue;
});

function clearDisplay() {
  screenCurrent.textContent = "";
  operation.textContent = "";
}

function deleteLast() {
  operation.textContent = operation.textContent.substring(
    0,
    operation.textContent.length - 1
  );
}

