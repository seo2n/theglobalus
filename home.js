// Swiper.js 초기화
var swiper = new Swiper('.swiper-container', {
    loop: true,  // 슬라이더가 무한 반복되도록 설정
    pagination: {
        el: '.swiper-pagination',
        clickable: true,  // 페이지 네이션을 클릭할 수 있게 설정
    },
    navigation: {
        nextEl: '.swiper-button-next',  // 다음 슬라이드 버튼
        prevEl: '.swiper-button-prev',  // 이전 슬라이드 버튼
    },
});
