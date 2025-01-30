function enviarContacto(req, res) {
  const { nombre, email, mensaje } = req.body;
  console.log("Nuevo contacto:", { nombre, email, mensaje });

  res.json({ message: "Formulario de contacto recibido con éxito" });
}

module.exports = { enviarContacto };

