const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");
const calculateBMIBtn = document.querySelector("#primary-btn");
const BMIvalue = document.querySelector(".value");

inputWeight.addEventListener("input", (e) => {
  inputWeight.value = e.target.value;
});

inputHeight.addEventListener("input", (e) => {
  inputHeight.value = e.target.value;
});

calculateBMIBtn.addEventListener("click", () => {
  if(inputHeight.value === '' || inputWeight.value === "") return;
  const BMI = inputWeight.value / (Math.pow(inputHeight.value, 2) / 10000);
  BMIvalue.innerText = BMI.toFixed(2);
});
