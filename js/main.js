const fadeEls1 = document.querySelectorAll('.background1 .fadeIn')

fadeEls1.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) *0.7, //대기시간
    opacity: 1 // 보이게 함
  })
})

//.badge 요소를 찾아 badgeEl 변수에 저장
const badgeEl = document.querySelector('.badge') 

//창(화면)에서 스크롤이 발생하면 함수를 실행하라
window.addEventListener('scroll', function() {
//함수: 만약 scroll해서 y좌표가 500을 넘으면 badge를 숨김
  if (window.scrollY > 500) {
    gsap.to(badgeEl, 0.6, {
      opacity: 0
    })
//스크롤 해서 y가 500을 넘지 않으면 badge를 보여줌
  } else {
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
    })
  }
})

// swiper
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});