/**
 * Leaflet 
 * Arcgis
 * CartoJS
 * MapBox
 * D3
 * 
 * Google Maps
 * 
 * Cesium
 * 
 * 
 * 
 * 
 * Develop a web app in which:

    Test if geolocation is available.
    If it's available, show the current position (latitude and longitude)
    If it isn't available, show a message for each and everyone of the possible errors.
    Improve your code so you show the position continuously (although the user could be in moving, so it could change)
    Find the way to meassure the distance traveled.



    //___________here developer___________//
 */
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
var map;
function success(pos) {
  var crd = pos.coords;
  if(map===undefined){
    var platform = new H.service.Platform({
        'apikey': 'a8n0GxqWcNPgWx38JqfdeAV-lOYWHfeeEszNqAW4qwg'
      });
    
    // Obtain the default map types from the platform object:
    var defaultLayers = platform.createDefaultLayers();
    
    // Instantiate (and display) a map object: 
     map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
      zoom: 15,
      center: { lat: crd.latitude, lng: crd.longitude }
    });
      
    // Define a variable holding SVG mark-up that defines an icon image:
    var svgMarkup = '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="black" x="1" y="1" width="22" ' +
    'height="22" /><text x="12" y="18" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="red">!</text></svg>';

    // Create an icon, an object holding the latitude and longitude, and a marker:
    var icon = new H.map.Icon(svgMarkup),
    coords = {lat: crd.latitude, lng: crd.longitude},
    marker = new H.map.Marker(coords, {icon: icon});   
   
  }else{
    marker.coords={lat: crd.latitude, lng: crd.longitude};
    map.setCenter(coords);
  }


  // Add the marker to the map and center the map at the location of the marker:
  map.addObject(marker);
                            
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.watchPosition(success, error, options);
      