var mapa = L.map("mapaid").setView([10, -84], 8);

var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mapa);

mapa.setMinZoom(2);
mapa.setMinZoom(6);

// Otra capa base
var esri = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
  }
).addTo(mapa);

// Otra capa base
var OpenStreetMap_HOT = L.tileLayer(
  "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
  }
).addTo(mapa);

// Marcadores
liberia = L.marker([10.633333, -85.433333]);
liberia.bindTooltip("Liberia").openTooltip();
liberia.addTo(mapa);

limon = L.marker([10.002216, -83.084037]);
limon.bindTooltip("Limón").openTooltip();
limon.addTo(mapa);

puntarenas = L.marker([9.966667, -84.833333]);
puntarenas.bindTooltip("Puntarenas").openTooltip();
puntarenas.addTo(mapa);

heredia = L.marker([10.00236, -84.11651]);
heredia.bindTooltip("Heredia").openTooltip();
heredia.addTo(mapa);

// Marcador para la Catedral Metropolitana de San José
var catedral = L.marker([9.9326673, -84.0787633]);
catedral
  .bindPopup(
    '<a href="https://es.wikipedia.org/wiki/Catedral_metropolitana_de_San_Jos%C3%A9">Catedral Metropolitana de San José</a>.<br>Catedral de estilo clásico y barroco. Templo principal de la arquidiócesis católica de San José.<br>Construída entre 1825 y 1827 y reconstruída en 1878.<br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Metropolitan_Cathedral_in_San_Jose%2C_Costa_Rica.jpg/640px-Metropolitan_Cathedral_in_San_Jose%2C_Costa_Rica.jpg">'
  )
  .openPopup();
catedral.bindTooltip("Catedral Metropolitana de San José").openTooltip();
catedral.addTo(mapa);

// Conjunto de capas base
var mapasBase = {
  "ESRI World Imagery": esri,
  OpenStreetMap: osm,
  Next: OpenStreetMap_HOT,
};

// Control de capas
L.control.layers(mapasBase).addTo(mapa);
// Control de escala
L.control
  .scale({ imperial: false, position: "topright", maxWidth: 200 })
  .addTo(mapa);
