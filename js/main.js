const fadeEls1 = document.querySelectorAll('.background1 .fadeIn')

fadeEls1.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) *0.7, //대기시간
    opacity: 1 // 보이게 함
  })
})