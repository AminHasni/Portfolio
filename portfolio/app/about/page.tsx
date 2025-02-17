import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileDown } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">À propos de moi</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            Je suis un développeur passionné avec une expérience dans la création d'applications web innovantes. Mon
            parcours m'a permis d'acquérir des compétences solides en développement front-end et back-end.
          </p>
          <p className="text-lg mb-4">
            Je suis constamment à la recherche de nouveaux défis et j'aime travailler sur des projets qui ont un impact
            positif.
          </p>
          <Button asChild>
            <Link href="/CV.pdf" target="_blank" rel="noopener noreferrer">
              <FileDown className="mr-2 h-4 w-4" /> Télécharger mon CV
            </Link>
          </Button>
        </div>
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Faits rapides</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Plus de 5 ans d'expérience en développement web</li>
            <li>Spécialisé en React, Next.js, et Node.js</li>
            <li>Passionné par l'UX/UI et l'accessibilité web</li>
            <li>Contributeur open source actif</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

