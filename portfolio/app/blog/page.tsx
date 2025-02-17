import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const blogPosts = [
  {
    title: "Introduction à Next.js 13",
    date: "2023-05-15",
    excerpt:
      "Découvrez les nouvelles fonctionnalités de Next.js 13 et comment elles peuvent améliorer votre développement.",
    slug: "introduction-nextjs-13",
  },
  {
    title: "L'importance de l'accessibilité web",
    date: "2023-04-22",
    excerpt: "Apprenez pourquoi l'accessibilité web est cruciale et comment l'implémenter dans vos projets.",
    slug: "importance-accessibilite-web",
  },
  // Ajoutez d'autres articles de blog au besoin
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
              <p className="text-sm text-muted-foreground">{post.date}</p>
            </CardHeader>
            <CardContent>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-primary hover:underline mt-2 inline-block">
                Lire la suite
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

