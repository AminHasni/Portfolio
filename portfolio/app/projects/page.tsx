"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import LazyImage from "@/components/LazyImage"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/ecommerce-platform",
    category: "Web Development",
    demoUrl: "https://demo.example.com/ecommerce",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "https://github.com/yourusername/task-management-app",
    category: "Productivity",
    demoUrl: "https://demo.example.com/task-manager",
  },
  // Add more projects as needed
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", ...new Set(projects.map((project) => project.category))]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Mes Projets</h1>
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setFilter(category)}
            variant={filter === category ? "default" : "outline"}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <LazyImage src={project.image} alt={project.title} width={300} height={200} />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Badge>{project.category}</Badge>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Voir le code
              </Link>
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Voir la démo
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

