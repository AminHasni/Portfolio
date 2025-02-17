import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Tableau de bord d'administration</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Gestion des projets</CardTitle>
            <CardDescription>Ajoutez, modifiez ou supprimez des projets</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/projects" className="text-primary hover:underline">
              Gérer les projets
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Gestion du blog</CardTitle>
            <CardDescription>Gérez vos articles de blog</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/blog" className="text-primary hover:underline">
              Gérer le blog
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Paramètres du site</CardTitle>
            <CardDescription>Modifiez les paramètres généraux du site</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/settings" className="text-primary hover:underline">
              Modifier les paramètres
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

