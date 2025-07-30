const result = document.getElementById("result");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const ziro = document.getElementById("ziro");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const devide = document.getElementById("devide");
const equal = document.getElementById("equal");
const dot = document.getElementById("dot");

let calculate = "";

ziro.addEventListener("click", () => {
  calculate += 0;
  result.value = calculate;
});
one.addEventListener("click", () => {
  calculate += 1;
  result.value = calculate;
});
two.addEventListener("click", () => {
  calculate += 2;
  result.value = calculate;
});
three.addEventListener("click", () => {
  calculate += 3;
  result.value = calculate;
});
four.addEventListener("click", () => {
  calculate += 4;
  result.value = calculate;
});
five.addEventListener("click", () => {
  calculate += 5;
  result.value = calculate;
});
six.addEventListener("click", () => {
  calculate += 6;
  result.value = calculate;
});
seven.addEventListener("click", () => {
  calculate += 7;
  result.value = calculate;
});
eight.addEventListener("click", () => {
  calculate += 8;
  result.value = calculate;
});
nine.addEventListener("click", () => {
  calculate += 9;
  result.value = calculate;
});
plus.addEventListener("click", () => {
  calculate += "+";
  result.value = calculate;
});
minus.addEventListener("click", () => {
  calculate += "-";
  result.value = calculate;
});
multiply.addEventListener("click", () => {
  calculate += "*";
  result.value = calculate;
});
devide.addEventListener("click", () => {
  calculate += "/";
  result.value = calculate;
});
dot.addEventListener("click", () => {
  calculate += ".";
  result.value = calculate;
});
equal.addEventListener("click", () => {
  let resultValue = eval(calculate);
  result.value = resultValue;
  calculate = resultValue;
  console.log(resultValue);
});
