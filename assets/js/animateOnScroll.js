"use-strict";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-element");
    }
  });
});

const elements = document.querySelectorAll(".hidden");

elements.forEach((element) => {
  observer.observe(element);
});
