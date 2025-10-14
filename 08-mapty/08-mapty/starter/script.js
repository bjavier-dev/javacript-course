'use strict';
 
// Add this after your existing Workout classes from Hour 1
 
// App class - the main application controller
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];
 
  constructor() {
    // Get user's position when app starts
    this._getPosition();
  }
 
  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }
 
  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`Loading map at: ${latitude}, ${longitude}`);
 
    const coords = [latitude, longitude];
 
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
 
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
 
    // Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));
  }
 
  _showForm(mapE) {
    this.#mapEvent = mapE;
    console.log('Map clicked at:', mapE.latlng);
 
    // For now, just log the click - we'll add form logic in Hour 3
    const { lat, lng } = mapE.latlng;
    console.log(`Clicked coordinates: ${lat}, ${lng}`);
  }
}
 
// Create the app instance
const app = new App();