let modalSlider;
let modalMini;


function openModal(p) {
    document.getElementById('demo').style.display = 'block';
    document.body.style.overflow = 'hidden';
    let back = document.getElementById('back');

    back.style.display = 'block';

    if(modalSlider === undefined) {
        modalSlider = new Swiper(".salim", {
        effect: 'cube',
        speed: 800,
        navigation : {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
        })
    }

    modalSlider.slideTo(p, false);

    if (modalMini === undefined) {
        modalMini = new Swiper('.thumbs', {
            slidesPerView: 5,
            slideToClickedSlide: true,
            centeredSlides: true,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                depth: 300,
            }
        })
    }

    modalMini.slideTo(p, 2, false);

    modalMini.controller.control = modalSlider;
    modalSlider.controller.control = modalMini;
}

function closeModal() {
    document.body.style.overflow = '';
    let back = document.getElementById('back');

    back.style.display = '';

    document.getElementById('demo').style.display = 'none';

}

const modalCloser = document.getElementById('modal-closer');
modalCloser.addEventListener('click', closeModal)







function seeAll() {
    const images1 = document.querySelector('.images1');
    const seeAllj = document.querySelector('.see-alld');
    const seeLess = document.querySelector('.see-less');
    images1.style.display = "flex";
    seeAllj.style.display = 'none';
    seeLess.style.display = 'block';
};

function seeLess() {
    const images1 = document.querySelector('.images1');
    const seeAllj = document.querySelector('.see-alld');
    const seeLess = document.querySelector('.see-less');
    images1.style.display = "";
    seeAllj.style.display = '';
    seeLess.style.display = '';
}



function checkInput() {
    let email = document.getElementById('email').value;

    if (!email.includes('@') || !email.includes('.')) {
        alert('Ваш email неверен')
    } else {
        alert('Всё верно!')
    }

}