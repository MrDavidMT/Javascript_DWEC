var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
    var platform = new H.service.Platform({
        'apikey': 'a8n0GxqWcNPgWx38JqfdeAV-lOYWHfeeEszNqAW4qwg'
        //esta clave la obtengo de mi cuenta de here develop
      });
    
    
      
    // Obtain the default map types from the platform object:
    var defaultLayers = platform.createDefaultLayers();
    
    // Instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
          zoom: 15,
          center: { lat: crd.latitude, lng: crd.longitude }
        });
  
    /*console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);*/
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);

  
  

   
  