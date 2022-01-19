// Add console.log to check to see if our code is working.
console.log("working");

// We create the streets view tile layer that will be an option for our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,    
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// We create the satellite streets view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// create maps layers
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
// Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});

// create a style for the lines
//let myStyle = {
//  color: "blue",
//  fillColor: "#ffffa1",
//  weight: 1
//}

// Grabbing our GeoJSON data.
//d3.json(torontoHoods).then(function(data) {
//    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
//  L.geoJSON(data, {
//    style: myStyle,
//    onEachFeature: function(feature, layer) {
//            console.log(layer);
//            layer.bindPopup("<h3> Neighborhood: " +feature.properties.AREA_NAME + "</h3>")
//        }
//    
//  }
//  ).addTo(map);
//});