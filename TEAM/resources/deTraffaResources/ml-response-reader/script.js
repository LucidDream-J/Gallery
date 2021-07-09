const main = document.querySelector("main");
const container = document.querySelector(".container");
const cover = document.querySelector(".cover");
const spinnerContainer = document.querySelector(".spinner-container");
const bottom = document.getElementById("bottom");
const voicesSelect = document.getElementById("voices");
const circleAni = document.getElementById("circles");
const textarea = document.getElementById("text");
const readBtn = document.getElementById("read");
const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close");
// const speechSynthesis = window.speechSynthesis;
let amISpeaking;

let mobilenet;
let imageTarget;
let label;
let prob;
let imageSrc;
let canvas;

const data = [
  {
    image: "./img/mark.jpg",
    text: "community controller, I will dominate",
  },
  {
    image: "./img/mad-monk.jpg",
    text: "totalitarian dictator! yes I'm so total ",
  },
  {
    image: "./img/peasants.jpg",
    text: "totalitarian dictator! yes I'm so total ",
  },
  {
    image: "./img/freeshit.jpg",
    text: "totalitarian dictator! yes I'm so total ",
  },
  {
    image: "./img/OIP.jpg",
    text: "community controller, I will dominate",
  },
  {
    image: "./img/OIP (1).jpg",
    text: "totalitarian dictator! yes I'm so total ",
  },
  {
    image: "./img/smurf3.jpg",
    text: "totalitarian dictator! yes I'm so total ",
  },
  {
    image: "./img/Jerrold_Nadler,_official_109th_Congress_photo.jpg",
    text: "totalitarian dictator! yes I'm so total ",
  },
  {
    image: "./img/schiff-10.03.26-PM.jpg",
    text: "community controller, I will dominate",
  },
  {
    image: "./img/harris.jpg",
    text: "totalitarian dictator! yes I'm so total ",
  },
  {
    image: "./img/OIP (2).jpg",
    text: "totalitarian dictator! yes I'm so total ",
  },
  {
    image: "./img/ChuckSchumer_AP.jpg",
    text: "totalitarian dictator! yes I'm so total ",
  },
];

data.forEach(createBox);

// Create speech boxes
function createBox(item) {
  const box = document.createElement("div");

  let { image, text } = item;

  box.classList.add("box");

  box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;

  box.addEventListener("click", (e) => {
    cover.classList.add("target");
    circleAni.classList.add("circles");
    // spinnerContainer.classList.remove("display");
    // console.log(cover.classList);
    // console.log(circleAni.classList);
    imageSrc = e.target.attributes.src.value;
    console.log(e.target);
    imageTarget = createImg(`${imageSrc}`);
    imageTarget.hide();
    mobilenet = ml5.imageClassifier("MobileNet", modelReady);
    // Add active effect
    box.classList.add("active");
    setTimeout(() => box.classList.remove("active"), 800);
    bottom.scrollIntoView({
      behavior: "smooth",
    });
  });

  main.appendChild(box);
}

// Init speech synth
const message = new SpeechSynthesisUtterance();

// Store voices
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach((voice) => {
    const option = document.createElement("option");

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

// Set text
function setTextMessage(text) {
  message.text = text;
}

// Speak text
function speakText() {
  speechSynthesis.speak(message);
}

// Set voice
function setVoice(e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
}

// Voices changed
speechSynthesis.addEventListener("voiceschanged", getVoices);

// Toggle text box
toggleBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.toggle("show")
);

// Close button
closeBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.remove("show")
);

// Change voice
voicesSelect.addEventListener("change", setVoice);

// Read text button
readBtn.addEventListener("click", () => {
  setTextMessage(textarea.value);
  speakText();
});

getVoices();

// mobilenet = ml5.imageClassifier("MobileNet", modelReady);
function modelReady() {
  console.log("Model is ready!!!");
  mobilenet.predict(imageTarget, gotResults);
}

function gotResults(error, data) {
  clearText();
  circleAni.classList.remove("circles");
  if (error) {
    console.error(error);
  } else {
    console.log(data);
    fill(255);
    textSize(23);
    background(0);
    label = data[1].className;
    text(label, 10, height / 2);
    prob = data[1].probability;

    // createP(label);
    // createP(prob);
    // setTimeout(() => {
    //   cover.classList.remove("target");
    // }, 5000);
    setTextMessage(label);
    speakText();
    setTextMessage(`probability${prob}`);
    speakText();
    // amISpeaking = speechSynthesis.speaking;
    // console.log(amISpeaking);
    // if (amISpeaking) {
    //   cover.classList.remove("target");
    // }
  }
  setTimeout(() => {
    cover.classList.remove("target");
    container.scrollIntoView({
      behavior: "smooth",
    });
  }, 12000);
}

function imageReady() {
  // image(puffin, 0, 0, width, height);
}

function setup() {
  canvas = createCanvas(500, 100);
  canvas.parent(container);
  // console.log(canvas.parent());
  background(0);
}
function clearText() {
  clear("text");
  // draw new stuff here
}
