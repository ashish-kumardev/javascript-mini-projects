const [span1, span2, span3] = document.querySelectorAll("h1 span");
const coderArr = ["Programmer", "Developer", "Coder", "Web Developer"];
const actorArr = ["Actor", "Singer", "Dancer", "Hero"]
const doctorArr = ["Doctor", "Gold Medalist", "MBBS"]

const autoType = (ele, words, stopTime, writeTime) => {
  let characterIndex = 0;
  let wordIndex = 0;
  let stopDelay = stopTime;
  let writeDelay = writeTime;
  setInterval(() => {
    if (wordIndex === words.length && characterIndex === 0) {
      wordIndex = 0;
      characterIndex = 0;
    }
    if (characterIndex === words[wordIndex].length) {
      if (stopDelay) {
        stopDelay--;
        return;
      }
      ele.innerText = ele.innerText.slice(0, ele.innerText.length - 1);
      if (ele.innerText === "") {
        wordIndex++;
        characterIndex = 0;
      }
      return;
    }

    if (writeDelay) {
      writeDelay--;
      return;
    }
    ele.innerHTML += words[wordIndex][characterIndex];
    writeDelay = writeTime;
    stopDelay = stopTime
    characterIndex++;
  }, 100);
};

autoType(span1, coderArr, 5, 1);
// autoType(span2, actorArr, 5, 1);
// autoType(span3, doctorArr, 5, 1);
