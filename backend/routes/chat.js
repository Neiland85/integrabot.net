const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController"); // ✅ Importar el controlador correctamente

router.post("/", chatController.procesarMensaje); // ✅ Usar la función del controlador

module.exports = router; // ✅ Exportar el router correctamente

