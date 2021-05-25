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
        title: 'DIY/Detailer',
        description: '<a href="https://www.facebook.com/carpro.brunei/">Carpro</a>'
        }
    },
    {
        type: 'Feature',
        geometry: {
        type: 'Point',
        coordinates: [114.8586454, 4.8884972]
        },
        properties: {
        title: 'Detailer/Coater',
        description: '<a href="https://www.facebook.com/BruSlickAutoDetailing/">Bruslick</a>'
        }
    }]
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
'</p>'
)
)
.addTo(map);
});