// Initialize Leaflet Map for Catanduanes (center: Virac)
var map = L.map('map').setView([13.5873, 124.2379], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Job Locations (lat, lng, popup content)
var jobs = [
  [13.5873, 124.2379, "<b>Construction Worker</b><br>Virac Town Proper"],
  [13.6005, 124.2280, "<b>Farm Helper</b><br>Bato"],
  [13.5700, 124.2800, "<b>Electrician</b><br>San Andres"],
  [13.6500, 124.2300, "<b>Housekeeper</b><br>Pandan"],
  [13.5600, 124.2200, "<b>Driver</b><br>Baras"]
];

// Add markers to the map
jobs.forEach(job => {
  L.marker([job[0], job[1]]).addTo(map).bindPopup(job[2]);
});

// Fix map rendering issue when page loads
setTimeout(() => { 
  map.invalidateSize(); 
}, 300);

// Load Lucide Icons
lucide.createIcons();
