import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Contacto</h1>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Nombre
            </label>
            <Input id="name" placeholder="Tu nombre" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input id="email" type="email" placeholder="tu@email.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Mensaje
            </label>
            <Textarea id="message" placeholder="Tu mensaje" rows={5} />
          </div>
          <Button type="submit" className="w-full">
            Enviar mensaje
          </Button>
        </form>
      </div>
    </div>
  )
}

