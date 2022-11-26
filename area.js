const firstSideInput = document.getElementById("first-side");
const secondSideInput = document.getElementById("second-side");
const thirdSideInput = document.getElementById("third-side");
const button = document.querySelector(".button");
const outputEl = document.querySelector("#output");

button.addEventListener("click", calculateArea);

function calculateArea(e) {
  e.preventDefault();

  const firstSide = Number(firstSideInput.value);
  const secondSide = Number(secondSideInput.value);
  const thirdSide = Number(thirdSideInput.value);

  if (
    firstSide + secondSide > thirdSide &&
    secondSide + thirdSide > firstSide &&
    firstSide + thirdSide > secondSide
  ) {
    const finalSum = semiPeri(firstSide, secondSide, thirdSide);
    const area = Math.sqrt(finalSum);
    outputEl.innerText = "The Area of Triangle is " + area;
    // console.log(1);
  } else {
    outputEl.innerText = "Enter Valid sides";
    // console.log(2);
  }
}

function semiPeri(a, b, c) {
  const s = (a + b + c) / 2;
  const sum = s * (s - a) * (s - b) * (s - c);
  return sum;
}
