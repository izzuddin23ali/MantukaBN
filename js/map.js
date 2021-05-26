mapboxgl.accessToken = 'pk.eyJ1IjoibWlhMjN6IiwiYSI6ImNrcDI5ZXJxeTE1NnkydW13anVqcGE4M28ifQ.1MSQALU4JLQd4jOuayuCbQ';
    
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [114.7277, 4.5353], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

    var geojson = {
        type: 'FeatureCollection',
        features: [{
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.4133805, 4.6500147]
            },
            properties: {
            title: 'Carpro',
            description: 'DIY/Detailer',
            facebook: "https://www.facebook.com/carpro.brunei/",
            instagram: "",
            number: ""
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.8586454, 4.8884972]
            },
            properties: {
            title: 'Bruslick',
            description: 'Detailer/Coater',
            facebook: "https://www.facebook.com/BruSlickAutoDetailing/",
            instagram: "",
            number: ""
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.9670116, 4.9490524]
            },
            properties: {
            title: 'RC Maju',
            description: 'Detailer / Coater',
            facebook: "",
            instagram: "",
            number: ""
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.9573579, 4.9743563]/*muara based*/
            },
            properties: {
            title: "The People's Carwash",
            description: 'Detailer',
            facebook: "",
            instagram: "https://www.instagram.com/thepeoplescarwash/",
            number: "+6738810284",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.9124974, 4.9169448]
            },
            properties: {
            title: "The Gloss Factory",
            description: 'Detailer',
            facebook: "",
            instagram: "https://www.instagram.com/theglossfactory/",
            number: "+6738810284",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.9514973, 4.9870613]
            },
            properties: {
            title: "Acadz Garage",
            description: 'Wrap',
            facebook: "https://www.facebook.com/acadzgarage002",
            instagram: "https://www.instagram.com/acadzgarage_bn/",
            number: "+6738910214",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: []
            },
            properties: {
            title: "Standout Premium Car Care",
            description: 'Mobile Car Wash',
            facebook: "",
            instagram: "https://www.instagram.com/standout.premiumcarcare/",
            number: "+6738876036",
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [114.9174316, 4.896568]
            },
            properties: {
            title: "Angelwax Brunei",
            description: 'Detailer / DIY',
            facebook: "https://www.facebook.com/angelwax.brunei/",
            instagram: "https://www.instagram.com/angelwaxbrunei/",
            number: "+673737 9899",
            }
        }
    ]
};

geojson.features.forEach(function (marker) {
// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'marker';
 
// make a marker for each feature and add it to the map
new mapboxgl.Marker(el)
.setLngLat(marker.geometry.coordinates)
.setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML(
        '<h3>' +
        marker.properties.title +
        '</h3><p>' +
        marker.properties.description +
        '</p><a target="_blank" href="' +
        marker.properties.facebook + 
        '"><i class="fab fa-facebook-square"></i></a><a target="_blank" href="' +
        marker.properties.instagram +
        '"><i class="fab fa-instagram-square"></i></a>'
    )
    
)
.addTo(map);
});