const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");
const floatingBTN = document.querySelector(".footerBtn");

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

// Hearts//////////////////////////////////////////////////

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
