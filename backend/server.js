// 📌 Importar módulos
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");

// 📌 Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 📌 Middlewares
app.use(cors()); // Habilitar CORS para todas las solicitudes
app.use(express.json()); // Permitir recibir datos en formato JSON
app.use(morgan("dev")); // Habilitar logs HTTP detallados en la terminal

// 📌 Importar rutas correctamente
const serviciosRoutes = require("./routes/servicios");
const contactoRoutes = require("./routes/contacto");
const chatRoutes = require("./routes/chat");

// 📌 Configurar rutas
app.use("/servicios", serviciosRoutes);
app.use("/contacto", contactoRoutes);
app.use("/api/chat", chatRoutes);

// 📌 Ruta de prueba
app.get("/", (req, res) => {
  res.send("🚀 Backend de Integrabot.net funcionando correctamente!");
});

// 📌 Manejo de errores global
app.use((err, req, res, next) => {
  console.error("❌ Error en el servidor:", err.stack);
  res.status(500).json({ error: "⚠️ Algo salió mal en el servidor" });
});

// 📌 Iniciar el servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});

