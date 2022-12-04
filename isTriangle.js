const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function isTriangle() {
  const sumOfAngles = calculateAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );

  let angle1 = Number(inputs[0].value);
  let angle2 = Number(inputs[1].value);
  let angle3 = Number(inputs[2].value);

  if (angle1 > 0 && angle2 > 0 && angle3 > 0) {
    if (sumOfAngles === 180) {
      console.log("It's a Triangle");
      outputEl.innerText = "It's a Triangle";
    } else {
      console.log("NOT a Triangle");
      outputEl.innerText = "NOT a Triangle";
    }
  } else {
    outputEl.innerText = "NOT a Triangle";
  }
}

function calculateAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

isTriangleBtn.addEventListener("click", isTriangle);
