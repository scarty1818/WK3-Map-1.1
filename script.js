require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/Camera",
  "esri/widgets/Home",
  "dojo/domReady!"
], function(WebScene, SceneView, Camera, Home) {
  
  var scene = new WebScene({
    portalItem:{
     id:"fbbbaa2fbfda41b8b3f96427c3ac5c79" 
    }
  });
  
  var camera = new Camera({
    position: [
      -90.1952, // lon
      38.6526, // lat
      5000000 // elevation in meters
    ],
    tilt:0,
    heading: 0
  });
  
  var camera2 = new Camera({
    position: {
      x: 116.4074,
      y: 39.9042,
      z: 5000000
    },
    tilt: 0,
    heading: 0
  });

  var view = new SceneView({
    container: "viewDiv",
    map: scene,
    viewingMode:"global",
    camera: camera,
    environment: {
        lighting: {
          date: new Date(),
          directShadowsEnabled: true,
          cameraTrackingEnabled: false
        }
    },
  });

  var homeBtn = new Home({
      view: view
  });

  // Add the home button to the top left corner of the view
  view.ui.add(homeBtn, "top-left");
  
  // Assume these are the IDs of your buttons in the HTML
  var stlBtn = document.getElementById('bc');
  var beiBtn = document.getElementById('gm');

  if(stlBtn && beiBtn) {
    stlBtn.style.display = 'flex';
    beiBtn.style.display = 'flex';
    
    view.ui.add(stlBtn, 'top-right');
    view.ui.add(beiBtn, 'top-right');
    
    beiBtn.addEventListener('click', function() {
      view.goTo({
        target: camera2
      });
    });
    
    stlBtn.addEventListener('click', function() {
      view.goTo({
        target: camera
      });
    });
  }
});
