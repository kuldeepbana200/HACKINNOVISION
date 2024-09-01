document.addEventListener("DOMContentLoaded", () => {
  const startVideo = document.getElementById("start_video");

  const mainContent = document.getElementById("main_content");
  const backVideo = document.querySelector(".back_video video");

  startVideo.addEventListener("ended", () => {
    mainContent.style.opacity = "1";
    backVideo.style.opacity = "1";
  });
});

const signUpbtn = document.querySelector(".signUpbtn");

signUpbtn.addEventListener("click", () => {
  window.location.href = "login.html";
});

const review = document.querySelector("#review");
review.addEventListener("click", () => {
  window.location.href = "review.html";
});

const p2p = document.querySelector("#p2p");
p2p.addEventListener("click", () => {
  window.location.href = "p2p.html";
});

const slides = document.querySelectorAll(".slide");
const radioButtons = document.querySelectorAll('input[type="radio"]');
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (index === i) {
      slide.style.display = "block";
      radioButtons[i].checked = true;
    } else {
      slide.style.display = "none";
      radioButtons[i].cheched = false;
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

rightBtn.addEventListener("click", nextSlide);
leftBtn.addEventListener("click", prevSlide);

radioButtons.forEach((radio, index) => {
  radio.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

setInterval(nextSlide, 5000);

showSlide(currentIndex);
