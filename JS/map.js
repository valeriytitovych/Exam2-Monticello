function initMap() {

    const uluru = { lat: 40.641, lng: -73.778 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: uluru,
    });

    const image = '../img/svg/map.png';

    const marker = new google.maps.Marker({
        position: uluru,
        icon: image,
        map: map,
    });

    const infowindow = new google.maps.InfoWindow({
        content: `<h2>Some foreigh airport lies here. Hope to visit once...</h2>`,
    });

    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });

    google.maps.event.addListener(infowindow, 'closeclick', function () {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    });

    marker.addListener('click', function () {
        marker.setAnimation(null);
    });

    var featureOpts = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#242f3e"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#746855"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#242f3e"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#5ee952"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e03105"
                },
                {
                    "weight": 3
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#d36012"
                },
                {
                    "weight": 1.5
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#0a154e"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#d59563"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#1fde1f"
                }
            ]
        },
        {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#1e3c1c"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#d59563"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#263c3f"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#6b9a76"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#3f80c0"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#162241"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9ca5b3"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#746855"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#1f2835"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#f3d19c"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#1f2835"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#2f3948"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f8da07"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#d59563"
                }
            ]
        },
        {
            "featureType": "transit.station.airport",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#8000ff"
                }
            ]
        },
        {
            "featureType": "transit.station.bus",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#8000ff"
                }
            ]
        },
        {
            "featureType": "transit.station.rail",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#8000ff"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#034a50"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#515c6d"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#17263c"
                }
            ]
        }
    ];

    map.setOptions({
        styles: featureOpts
    });
}