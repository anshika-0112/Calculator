//Calcualting the given expression
export const calculateExpression = (calculator) => {

  switch (calculator.operator) {
    case "+":
      calculator.result = calculator.firstNumber + calculator.secondNumber;
      break;
    case "x":
      calculator.result = calculator.firstNumber * calculator.secondNumber;
      break;
    case "/":
      calculator.result = calculator.firstNumber / calculator.secondNumber;
      break;
    case "-":
      calculator.result = calculator.firstNumber - calculator.secondNumber;
      break;
    default:
      break;
  }
  return calculator;
};
