const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 0,
    items: 3,
    responsive : {
        850 : {
            items: 3,
            startPosition: 1,
        },
        1200 : {
            items: 3,
            margin : 30,
        }
    }
});

$('slider__btn--prev').click(function() {
   
    owl.trigger('prev.owl.carousel');
})

$('slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

const nav = document.querySelector('#nav')
const navClas = document.querySelector('nav')
const navBtn = document.querySelector('#nav-btn')
const navBtnImg = document.querySelector('#nav-btn-img')

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./imeges/NAV.svg";
        
    } else {
        navBtnImg.src = "./imeges/NAV CLOSE.svg";
       
    }
    navClas.classList.toggle('nav--mobile')
    
}
