//Calcualting the given expression
export const calculateExpression = (calculator) => {
  const firstValue=calculator.firstNumber;
  const secondValue=calculator.secondNumber;
  const operation=calculator.operator;

  switch (operation) {
    case "+":
      calculator.result = firstValue + secondValue;
      break;
    case "x":
      calculator.result = firstValue * secondValue;
      break;
    case "/":
      calculator.result = firstValue / secondValue;
      break;
    case "-":
      calculator.result = firstValue - secondValue;
      break;
    default:
      break;
  }
  return calculator;
};
