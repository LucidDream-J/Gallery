const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");
const floatingBTN = document.querySelector(".footerBtn");
const btn = document.querySelectorAll(".btn");

// attach an event listener
floatingBTN.addEventListener("click", (e) => {
  // select the footer
  const footer = document.querySelector(".footer");

  // check if the class exists (active) then remove
  if (footer.classList.contains("active")) {
    // remove the class
    footer.classList.remove("active");
    // return the original text
    e.target.innerText = "Terms, Privacy, Currency & more";
  } else {
    // we add the active class to the footer
    footer.classList.add("active");

    // add the close text
    e.target.innerText = "X Close";
  }
});

open_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.add("visible"));
});

close_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.remove("visible"));
});

///////////////CARDS//////////////////////////////////////

const panels = document.querySelectorAll(".panel"); // returns a nodeList
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

///////////////////////////// Not Available message///////////////////////////

document.querySelectorAll(".message").forEach((msg) => {
  msg.addEventListener("mouseover", () => {
    msg.classList.toggle("change");
    // msg.nextElementSibling.classList.toggle("change");
  });
});

///////////////////Form Send/////////////////////////////////////////////
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerText = "Thank's for your submission!";
  }

  function error() {
    status.classList.add("error");
    status.innerText = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

///////////////////Form Send End/////////////////////////////////////////////

//////////////////////////////////////slide show/////////////////////////////////////////

const data = [
  {
    image: "./disobey/Vic-13A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-1A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-2A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-3A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-4A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-5A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-6A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-7A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-8A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-9A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-11A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-12A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-14A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-15A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-16A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-17A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-34A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-19A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-20A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-54A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-71A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-72A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-73A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-70A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-21A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-22A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-24A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-25A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-26A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-27B.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-28A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-29A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-30A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-31A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-32A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-58A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-32BA.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-35A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-36A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-37A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-38A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-39A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-40A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-41A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-56A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-64A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-60A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-42A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-43A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-44A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-45A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-46A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-47A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-48A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-49A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-51A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-52A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-55A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-68A.jpg",
    text: "Obey - dis-Obey",
  },

  {
    image: "./disobey/Vic-61A.jpg",
    text: "Obey - dis-Obey",
  },

  {
    image: "./disobey/Vic-101A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-100A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-102A.jpg",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-102A1.png",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/Vic-102A2.png",
    text: "Obey - dis-Obey",
  },
  {
    image: "./disobey/blueFox.jpg",
    text: "Obey - dis-Obey",
  },
];
const slideContainer = document.getElementById("slider");
data.forEach((item) => createSlide(item));

// Create speech boxes
function createSlide(item) {
  const slide = document.createElement("div");

  const { image, text } = item;

  slide.classList.add("slide");

  slide.innerHTML = ` <img src="${image}" alt="${text}" />`;

  slideContainer.appendChild(slide);
}

function slider() {
  let slides = document.querySelectorAll(".slide");
  slider = document.querySelector(".slider");
  last = slider.lastElementChild;
  first = slider.firstElementChild;

  slider.insertBefore(last, first);

  btn.forEach((btn) => {
    btn.addEventListener("click", movement);
  });
  setInterval(function () {
    movement({ target: { id: "next" } });
  }, 3000);
  function movement(e) {
    slider = document.querySelector(".slider");
    last = slider.lastElementChild;
    first = slider.firstElementChild;

    const activeSlide = document.querySelector(".active");

    if (e.target.id === "next") {
      slider.insertBefore(first, last.nextSibling);

      activeSlide.classList.remove("active");
      activeSlide.nextElementSibling.classList.add("active");
    } else {
      slider.insertBefore(last, first);
      activeSlide.classList.remove("active");
      activeSlide.previousElementSibling.classList.add("active");
    }
  }
}
slider();

//////////////////////////////////////slide show end/////////////////////////////////////

// const loveMe = document.querySelector(".loveMe");
// const times = document.querySelector("#times");
// let clickTime = 0;
// let timesClicked = 0;

// loveMe.addEventListener("click", (e) => {
//   if (clickTime === 0) {
//     clickTime = new Date().getTime();
//   } else {
//     if (new Date().getTime() - clickTime < 800) {
//       createHeart(e);
//       clickTime = 0;
//     } else {
//       clickTime = new Date().getTime();
//     }
//   }
// });

// function createHeart(e) {
//   const heart = document.createElement("i");
//   heart.classList.add("fas");
//   heart.classList.add("fa-heart");

//   const x = e.clientX;
//   const y = e.clientY;

//   const leftOffset = e.target.offsetLeft;
//   const topOffset = e.target.offsetTop;

//   const xInside = x - leftOffset;
//   const yInside = y - topOffset;

//   //   console.log(x, xInside, y, yInside);

//   heart.style.top = `${yInside}px`;
//   heart.style.left = `${xInside}px`;

//   loveMe.appendChild(heart);
//   times.textContent = ++timesClicked;

//   setTimeout(() => {
//     heart.remove();
//   }, 1000);
// }

// const data = [
//   {
//     image: "./motherSons/mother2sons.jpg",
//     text: "Mother, Sons, Spectators",
//   },
//   {
//     image: "./motherSons/motherSon.jpg",
//     text: "Mother, Sons, Spectators",
//   },
//   {
//     image: "./motherSons/motherSonBW.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW1.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW10.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW11.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW12.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW13.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW15.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW14.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW17.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW18.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW19.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW2.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW20.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW21.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW22.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW23.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW24.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW25.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW26.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW27.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW28.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW29.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW3.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW30.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW31.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW32.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW33.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW4.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW5.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW6.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW7.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW8.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonBW9.jpg",
//     text: "Obey - dis-Obey",
//   },
//   {
//     image: "./motherSons/motherSonSpectator.jpg",
//     text: "Obey - dis-Obey",
//   },
// ];
