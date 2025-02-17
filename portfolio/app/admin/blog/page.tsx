"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, Edit } from "lucide-react"

export default function BlogAdminPage() {
  const [posts, setPosts] = useState([])
  const [editingPost, setEditingPost] = useState(null)
  const [newPost, setNewPost] = useState({ title: "", content: "", author: "" })

  const handleAddPost = (e) => {
    e.preventDefault()
    if (editingPost) {
      setPosts(posts.map((p) => (p.id === editingPost.id ? { ...newPost, id: editingPost.id } : p)))
      setEditingPost(null)
    } else {
      setPosts([...posts, { ...newPost, id: Date.now() }])
    }
    setNewPost({ title: "", content: "", author: "" })
  }

  const handleEditPost = (post) => {
    setEditingPost(post)
    setNewPost(post)
  }

  const handleDeletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Gestion du blog</h1>
      <Tabs defaultValue="add" className="space-y-4">
        <TabsList>
          <TabsTrigger value="add">Ajouter/Modifier un article</TabsTrigger>
          <TabsTrigger value="list">Liste des articles</TabsTrigger>
        </TabsList>
        <TabsContent value="add">
          <Card>
            <CardHeader>
              <CardTitle>{editingPost ? "Modifier l'article" : "Ajouter un nouvel article"}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddPost} className="space-y-4">
                <Input
                  placeholder="Titre de l'article"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  required
                />
                <Textarea
                  placeholder="Contenu de l'article"
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  required
                />
                <Input
                  placeholder="Auteur"
                  value={newPost.author}
                  onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                  required
                />
                <Button type="submit">{editingPost ? "Mettre à jour" : "Ajouter"} l'article</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="list">
          <Card>
            <CardHeader>
              <CardTitle>Articles existants</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Titre</TableHead>
                    <TableHead>Auteur</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {posts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell>{post.title}</TableCell>
                      <TableCell>{post.author}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" onClick={() => handleEditPost(post)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDeletePost(post.id)}>
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

