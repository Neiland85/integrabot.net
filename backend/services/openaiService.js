const openai = require("openai"); // O el cliente que estés utilizando

async function generateChatResponse(messages) {
  // Aquí colocas la lógica para interactuar con OpenAI
  // Ejemplo:
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: messages,
  });
  return response.data.choices[0].message.content;
}

module.exports = { generateChatResponse };
