(function () {
    const anchors = document.querySelectorAll('a.scroll-to')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href')

            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
})();

(function () {
    let content = document.querySelector('.section2-block1-right-textholder-hidden');
    let show = document.querySelector('.section2-block1-right__btn');
    let hide = document.querySelector('.section2-block1-right__btn');

    show.addEventListener('click', () => {
        content.style.display = "flex";
    })

    hide.addEventListener('click', () => {
        content.style.display = "none";
    })
})();

(function () {
    let content = document.querySelector('.section2-block2-left-textholder-hidden');
    let show = document.querySelector('.section2-block2-left__btn');
    let hide = document.querySelector('.section2-block2-left__btn');

    show.addEventListener('click', () => {
        content.style.display = "flex";
    })

    hide.addEventListener('click', () => {
        content.style.display = "none";
    })
})();

(function () {
    $('.slider').slick({
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<img src='./img/svg/prev.svg' class='prev' alt='1'>",
        nextArrow: "<img src='./img/svg/next.svg' class='next' alt='2'>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true
                }
            }
        ]
    });
})();

(function () {
    const myForm = document.querySelector('.section5-footer-contacts-content-form__item');

    myForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const searchParams = new URLSearchParams();

        for (const pair of formData) {
            searchParams.append(pair[0], pair[1]);

        };

        fetch('data.php', {
            method: 'post',
            body: searchParams
        }).then(function (pesponse) {
            return pesponse.text();
        }).then(function (text) {
            console.log(text);
        }).catch(function (error) {
            console.error(error);
        })
    });
})();