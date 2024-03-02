const counterValue = document.querySelector(".counter-value");
const [decrBtn, incrBtn, resetBtn] = document.querySelectorAll(".btn");
const inputNumber = document.querySelector("#number");
const counterContainer = document.querySelector(".counter-container");

// 1st method
// decrBtn.addEventListener("click", () => {
//   const newNumber = counterValue.innerText - inputNumber.value;
//   counterValue.innerText = newNumber;
// });

// incrBtn.addEventListener("click", () => {
//   const newNumber = +counterValue.innerText + +inputNumber.value;
//   counterValue.innerText = newNumber;
// });

// resetBtn.addEventListener('click', () => {
//   counterValue.innerText = 0;
// })

inputNumber.addEventListener("input", (e) => {
  inputNumber.value = e.target.value;
});

// 2nd method
counterContainer.addEventListener("click", (e) => {
  if (e.target.innerText === "-") {
    counterValue.innerText = counterValue.innerText - inputNumber.value;
    return;
  }

  if (e.target.innerText === "+") {
    counterValue.innerText = +counterValue.innerText + +inputNumber.value;
    return;
  }

  if (e.target.innerText === "Reset") {
    counterValue.innerText = 0;
  }
});
