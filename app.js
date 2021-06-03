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
