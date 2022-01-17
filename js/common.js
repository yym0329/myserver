/* =========== 검색칸 토글 기능 ============ */

const searchEl = document.querySelector('.search'); // document 전체에서 .search 클래스를 갖는 첫번째 요소를 찾음.
const searchInputEl = searchEl.querySelector('input');
// searchEl 요소 안에서 input 클래스를 갖는 요소를 찾는다.

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

/* ==========AWARDS SWIPER============= */

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev'
  }
});

/* =========FOOTER 현재 연도 반환============== */
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해 연도 반환