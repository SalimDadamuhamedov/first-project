function checkInput() {
    let email = document.getElementById('email').value;

    if(!email.includes('@') || !email.includes('.')) {
        alert('Ваш email неверен')
    } else {
        alert('Всё верно!')
    }
 
}







new Swiper('.swiper', {
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    autoplay: {
        delay: 2000,
    },

    speed: 900,
})



