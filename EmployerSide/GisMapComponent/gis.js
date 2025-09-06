// Initialize GIS Map
var map = L.map('map').setView([13.5873, 124.2379], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var workers = [
  [13.5873, 124.2379, "<b>Carpenter</b><br>Virac"],
  [13.6005, 124.2280, "<b>Helper</b><br>Bato"],
  [13.5700, 124.2800, "<b>Electrician</b><br>San Andres"],
  [13.6500, 124.2300, "<b>Housekeeper</b><br>Pandan"],
  [13.5400, 124.2500, "<b>Driver</b><br>Baras"]
];

workers.forEach(worker => {
  L.marker([worker[0], worker[1]]).addTo(map).bindPopup(worker[2]);
});
