const express = require("express");
const router = express.Router();
const serviciosController = require("../controllers/serviciosController"); // ✅ Importar correctamente

router.get("/", serviciosController.getServicios); // ✅ Usar la función del controlador

module.exports = router; // ✅ Exportar el router correctamente

