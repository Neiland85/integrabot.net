const openaiService = require("../services/openaiService");

async function procesarMensaje(req, res) {
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Se requiere un array de mensajes válido" });
    }

    const respuesta = await openaiService.generateChatResponse(messages);
    res.json({ respuesta });
  } catch (error) {
    console.error("❌ Error en el controlador de chat:", error);
    res.status(500).json({ error: "Hubo un problema al procesar tu solicitud" });
  }
}

module.exports = { procesarMensaje }; // ✅ Exportamos correctamente la función

