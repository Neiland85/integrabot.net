import { OpenAIStream, StreamingTextResponse } from "ai"
import OpenAI from "openai"

// Verificar que la clave de API esté configurada
if (!process.env.OPENAI_API_KEY) {
  throw new Error("La clave de API de OpenAI no está configurada")
}

// Configurar OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Contexto del sistema para el chatbot
const systemPrompt = `Eres el asistente virtual de Integrabot.net, una empresa de desarrollo de software y soluciones de IA.
Servicios principales:
- Desarrollo de aplicaciones web y móviles
- Implementación de chatbots y asistentes virtuales
- Integración de APIs y automatización
- Consultoría en IA y desarrollo de software

Responde de manera concisa, profesional y amigable. Si no sabes algo específico sobre Integrabot.net, sugiere contactar directamente con el equipo.`

export const runtime = "edge"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Verificar si el último mensaje es sobre precios
    const lastMessage = messages[messages.length - 1].content.toLowerCase()
    if (lastMessage.includes("precio") || lastMessage.includes("costo") || lastMessage.includes("tarifa")) {
      return new Response(
        JSON.stringify({
          role: "assistant",
          content:
            "Para obtener información sobre precios, por favor escribe un WhatsApp o llama a nuestro especialista en proyectos Neil Muñoz al 613722441.",
        }),
        { headers: { "Content-Type": "application/json" } },
      )
    }

    // Crear el completion con el contexto del sistema
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      stream: true,
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      max_tokens: 500,
      temperature: 0.7,
      frequency_penalty: 0,
      presence_penalty: 0,
    })

    // Crear stream de respuesta
    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream)
  } catch (error: any) {
    console.error("Error en la ruta de chat:", error)
    return new Response(JSON.stringify({ error: error.message || "Hubo un problema al procesar tu solicitud." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

