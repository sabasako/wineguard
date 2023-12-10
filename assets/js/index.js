"use strict";

const orderButton = document.querySelectorAll(".button-order");
const modal = document.querySelector(".modal");
const modalBackground = document.querySelector(".modal-background");
const closeBtn = document.querySelector(".close-button");

function removeModal(e) {
  if (e.key === "ESQ") {
    document.body.classList.remove("modal-active");
    modal.classList.remove("show");
    modalBackground.classList.remove("background-show");
  }

  document.body.classList.remove("modal-active");
  modal.classList.remove("show");
  modalBackground.classList.remove("background-show");
}

orderButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    document.body.classList.add("modal-active");
    modal.classList.add("show");
    modalBackground.classList.add("background-show");
  });
});

closeBtn.addEventListener("click", removeModal);
modalBackground.addEventListener("click", removeModal);
window.addEventListener("keydown", removeModal);
