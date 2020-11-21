window.onload = () => {
    $('.slider').slick({
        dots: true,
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
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });
}

function initMap() {

    const uluru = { lat: 49.604, lng: 34.499 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: uluru,
    });

    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
    const infowindow = new google.maps.InfoWindow({
        content: `<h2>Home, sweet home. Sewer, where lives Valeron Titovych</h2>`,
    });

    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });
}