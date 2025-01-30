const servicios = [
  { id: 1, nombre: "Desarrollo Web", descripcion: "Creamos sitios web modernos y responsivos." },
  { id: 2, nombre: "Chatbots IA", descripcion: "Implementamos asistentes virtuales inteligentes." },
  { id: 3, nombre: "Aplicaciones Móviles", descripcion: "Desarrollamos apps nativas y multiplataforma." },
  { id: 4, nombre: "Integración de APIs", descripcion: "Conectamos sistemas y automatizamos procesos." }
];

function getServicios(req, res) {
  res.json(servicios);
}

module.exports = { getServicios }; // ✅ Exportamos correctamente la función

