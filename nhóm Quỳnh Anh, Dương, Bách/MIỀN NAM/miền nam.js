// banner giới thiệu chung
const img = document.querySelector('.img-banner');

window.addEventListener('scroll', () => {
    const current = window.scrollY;
    img.style.clipPath =  `circle(${current + 80}px at center)`;
})