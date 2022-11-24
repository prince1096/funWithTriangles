const sides = document.querySelectorAll(".side-input");
const button = document.querySelector("#button");
const outputEl = document.querySelector("#output");

function sumOfSquares(a, b) {
  const sum = a * a + b * b;
  return sum;
}

function calculateHypo() {
  const totalSum = sumOfSquares(Number(sides[0].value), Number(sides[1].value));
  const length = Math.sqrt(totalSum);
  //   console.log(length);

  outputEl.innerText = "The length of hypotenuse is " + length;
  //   console.log(totalSum);
}

button.addEventListener("click", calculateHypo);
