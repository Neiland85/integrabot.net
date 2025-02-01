import OpenAI from "openai"

if (!process.env.OPENAI_API_KEY) {
  throw new Error("La clave de API de OpenAI no está configurada")
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function getChatCompletion(messages: any[]) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: messages,
      stream: true,
    })
    return response
  } catch (error: any) {
    console.error("Error al llamar a la API de OpenAI:", error)
    if (error.response) {
      console.error(error.response.status, error.response.data)
    }
    throw new Error("Hubo un problema al procesar tu solicitud. Por favor, intenta de nuevo.")
  }
}

