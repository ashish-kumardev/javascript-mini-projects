const options = document.querySelectorAll(".option");
const circles = document.querySelectorAll(".option .circle");
let optionsOn = document.querySelectorAll(".option.on");
const generatePasswordBtn = document.querySelector(".generate-pass");
const inputRange = document.querySelector("input");
const lengthValue = document.querySelector(".length .length-value");
const passValue = document.querySelector(".value")
const copyToClipboardBtn = document.querySelector('.copy')
const lowercase = `abcdefghijklmnopqrstuvwxyz`;
const uppercase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const numbers = `1234567890`;
const symbols = `!@#$%^&*()_+[]{}|;:'",.<>?/`;
let allOptionsArr = [];

lengthValue.innerHTML = inputRange.value;

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", () => {
    options[i].classList.toggle("on");
    circles[i].classList.toggle("on");
    optionsOn = document.querySelectorAll(".option.on");
  });
}

function whichOptionSelected() {
  for (const optionOn of optionsOn) {
    const prevElem = optionOn.previousElementSibling.innerHTML;
    if (prevElem === "Include uppercase") {
      allOptionsArr.push(uppercase);
    } else if (prevElem === "Include lowercase") {
      allOptionsArr.push(lowercase);
    } else if (prevElem === "Include numbers") {
      allOptionsArr.push(numbers);
    } else {
      allOptionsArr.push(symbols);
    }
  }
}

const generatePass = () => {
  allOptionsArr = [];
  let index = 0;
  let pass = ``;
  whichOptionSelected();
  for (let i = 0; i < inputRange.value; i++) {
    if (index === allOptionsArr.length) {
      index = 0;
    }
    pass +=
      allOptionsArr[index][
        Math.floor(Math.random() * allOptionsArr[index].length)
      ];
    index++;
  }
  passValue.innerHTML = pass
};

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(passValue.innerHTML);
  } catch (error) {
    console.log("Error while copy to clipboard",error)
  }
}

generatePasswordBtn.addEventListener("click", generatePass);
inputRange.addEventListener("input", (e) => {
  lengthValue.innerHTML = e.target.value;
});

copyToClipboardBtn.addEventListener("click",copyToClipboard)
