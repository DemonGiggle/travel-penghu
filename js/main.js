// 圖片輪播功能
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(n) {
  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  slides[slideIndex].classList.add('active');
}

// 自動輪播（每 5 秒）
setInterval(() => {
  changeSlide(1);
}, 5000);