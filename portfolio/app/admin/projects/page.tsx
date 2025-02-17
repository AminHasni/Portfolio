"use client"

import { useState } from "react"

import { useLocalStorage } from "@/hooks/useLocalStorage"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, Edit } from "lucide-react"
import toast from "react-hot-toast"

const projectSchema = z.object({
  title: z.string().min(1, "Le titre est requis"),
  description: z.string().min(10, "La description doit contenir au moins 10 caractères"),
  category: z.string().min(1, "La catégorie est requise"),
  demoUrl: z.string().url("L'URL de démo doit être une URL valide"),
  imageUrl: z.string().url("L'URL de l'image doit être une URL valide"),
})

export default function ProjectsAdminPage() {
  const [projects, setProjects] = useLocalStorage("projects", [])
  const [editingProject, setEditingProject] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      demoUrl: "",
      imageUrl: "",
    },
  })

  const onSubmit = (data) => {
    if (editingProject) {
      setProjects(projects.map((p) => (p.id === editingProject.id ? { ...data, id: editingProject.id } : p)))
      setEditingProject(null)
      toast.success("Projet mis à jour avec succès")
    } else {
      setProjects([...projects, { ...data, id: Date.now() }])
      toast.success("Nouveau projet ajouté avec succès")
    }
    reset()
  }

  const handleEditProject = (project) => {
    setEditingProject(project)
    reset(project)
  }

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id))
    toast.success("Projet supprimé avec succès")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Gestion des projets</h1>
      <Tabs defaultValue="add" className="space-y-4">
        <TabsList>
          <TabsTrigger value="add">Ajouter/Modifier un projet</TabsTrigger>
          <TabsTrigger value="list">Liste des projets</TabsTrigger>
        </TabsList>
        <TabsContent value="add">
          <Card>
            <CardHeader>
              <CardTitle>{editingProject ? "Modifier le projet" : "Ajouter un nouveau projet"}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Input placeholder="Titre du projet" {...register("title")} />
                  {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                </div>
                <div>
                  <Textarea placeholder="Description du projet" {...register("description")} />
                  {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                </div>
                <div>
                  <Input placeholder="Catégorie" {...register("category")} />
                  {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                </div>
                <div>
                  <Input placeholder="URL de la démo" {...register("demoUrl")} />
                  {errors.demoUrl && <p className="text-red-500 text-sm mt-1">{errors.demoUrl.message}</p>}
                </div>
                <div>
                  <Input placeholder="URL de l'image" {...register("imageUrl")} />
                  {errors.imageUrl && <p className="text-red-500 text-sm mt-1">{errors.imageUrl.message}</p>}
                </div>
                <Button type="submit">{editingProject ? "Mettre à jour" : "Ajouter"} le projet</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="list">
          <Card>
            <CardHeader>
              <CardTitle>Projets existants</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Titre</TableHead>
                    <TableHead>Catégorie</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell>{project.title}</TableCell>
                      <TableCell>{project.category}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" onClick={() => handleEditProject(project)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteProject(project.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

