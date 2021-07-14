export const clearScreen = (calculator) => {
  calculator.firstNumber="";
  calculator.secondNumber="";
  calculator.operator="";
  calculator.result=""
  return calculator;
};
