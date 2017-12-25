var section = document.querySelector('.section');
var inp = document.querySelector('.inp');
var header = document.querySelector('.header');
section.onscroll = function() {
    var ind = this.scrollTop;
    console.log(ind);
    if (ind > 1) {
        inp.classList.add('on');
        header.style.background = '#fff';
        header.style.color = '#000';
    } else {
        inp.classList.remove('on');
        header.style.background = '';
        header.style.color = '#fff';
    }
};
var mySwiper = new Swiper('.swiper-container1', {
    direction: 'vertical',
    loop: true,
    autoplay: 2000
});