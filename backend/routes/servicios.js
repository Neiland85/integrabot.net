const express = require("express");
const router = express.Router();
const serviciosController = require("../controllers/serviciosController"); // ✅ Importar el controlador

// Definir ruta GET para "/servicios"
router.get("/", serviciosController.getServicios); // ✅ Ruta principal

module.exports = router; // ✅ Exportar el router
