import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Integrabot.net</h3>
            <p className="text-sm text-muted-foreground">
              Soluciones tecnológicas innovadoras con IA para impulsar tu negocio
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicios" className="hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Newsletter</h4>
            <form className="flex flex-col gap-2">
              <Input type="email" placeholder="tu@email.com" className="max-w-xs" />
              <Button type="submit" className="w-fit">
                Suscribirse
              </Button>
            </form>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-8 border-t text-sm text-muted-foreground">
          <p>© 2024 Integrabot.net. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/privacidad" className="hover:text-primary transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-primary transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

