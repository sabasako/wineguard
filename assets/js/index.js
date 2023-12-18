const orderButton = document.querySelectorAll(".button-order");
const modal = document.querySelector(".modal");
const modalBackground = document.querySelector(".modal-background");
const closeBtn = document.querySelector(".close-button");

const partsSubheading = document.querySelectorAll(".parts-subheading");
const content = document.querySelectorAll(".content");
const dropdown = document.querySelector(".dropdown");
const moreHeading = document.querySelector(".more-heading");

function removeModal(e) {
  if (e.key === "Escape") {
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

partsSubheading.forEach((subheading) => {
  subheading.addEventListener("click", (e) => {
    e.preventDefault();

    // subheading.nextElementSibling.classList.toggle("show");
    subheading.nextElementSibling.classList.toggle("show");
    subheading.querySelector(".drop-down-icon").classList.toggle("show");
  });
});

const swiper = new Swiper(".swiper", {
  // direction: "vertical",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
