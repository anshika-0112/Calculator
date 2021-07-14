import { clearScreen } from "./utilities/clearScreen.js";
import {
  handleNumberClick,
  handleOperatorClick,
  handleEqualToClick,
} from "./utilities/UpdateDisplay.js";

import { setInputScreen, setOutputScreen } from "./utilities/display.js";
import { deleteLastValue } from "./utilities/delete.js";

const initializeCalculator = () => {
  let calculator = {
    firstNumber: "",
    secondNumber: "",
    result: "",
    operator: "",
    expression: (firstNumber, secondNumber, operator) => {
      return firstNumber + operator + secondNumber;
    },
  };
  const numberButtons = document.getElementsByClassName("data-value");
  const operatorButtons = document.getElementsByClassName("data-operator");
  const equalToButton = document.getElementById("equalTo");
  const allClearButton = document.getElementById("data-deleteAll");
  const deleteButton = document.getElementById("data-delete");

   //Display Numbers on Screen
  for (const i of numberButtons) {
    i.addEventListener("click", () => {
      calculator = handleNumberClick(calculator, parseInt(i.innerHTML));
      setOutputScreen(calculator);
    });
  }


 //Display Opeartors on Screen
  for (const i of operatorButtons) {
    i.addEventListener("click", () => {
      calculator = handleOperatorClick(calculator, i.innerHTML);
      console.log(calculator.operator);
      setInputScreen(calculator);
    });
  }

  allClearButton.addEventListener("click", () => {
    calculator = clearScreen(calculator);
    setOutputScreen(calculator);
    setInputScreen(calculator);
  });

  equalToButton.addEventListener("click", () => {
    calculator = handleEqualToClick(calculator);
  });
  setOutputScreen(calculator);

  deleteButton.addEventListener("click", () => {
    calculator = deleteLastValue(calculator);
    setOutputScreen(calculator);
  });
};

initializeCalculator();
