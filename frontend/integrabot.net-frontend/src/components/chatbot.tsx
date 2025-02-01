"use client"

import { useState } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, Send, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    onError: (error) => {
      console.error("Error en el chat:", error)
      setErrorMessage(error.message || "Hubo un problema al procesar tu solicitud. Por favor, intenta de nuevo.")
    },
  })

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage(null)
    if (input.trim()) {
      try {
        await handleSubmit(e)
      } catch (error: any) {
        console.error("Error al enviar el mensaje:", error)
        setErrorMessage(error.message || "Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.")
      }
    }
  }

  return (
    <>
      <Button
        size="icon"
        className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg z-50"
        onClick={() => setIsOpen(true)}
      >
        <Bot className="h-6 w-6" />
      </Button>

      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-[350px] shadow-lg z-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <span className="font-semibold">Asistente Virtual</span>
            </div>
            <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] space-y-4 overflow-y-auto py-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn("flex", {
                    "justify-end": message.role === "user",
                    "justify-start": message.role === "assistant",
                  })}
                >
                  <div
                    className={cn("rounded-lg px-4 py-2 max-w-[80%]", {
                      "bg-primary text-primary-foreground": message.role === "user",
                      "bg-muted": message.role === "assistant",
                    })}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg px-4 py-2">Escribiendo...</div>
                </div>
              )}
              {errorMessage && (
                <div className="flex justify-center">
                  <div className="bg-destructive text-destructive-foreground rounded-lg px-4 py-2">
                    Error: {errorMessage}
                  </div>
                </div>
              )}
            </div>
            <form onSubmit={handleFormSubmit} className="flex gap-2 pt-4">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Escribe tu mensaje..."
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  )
}

