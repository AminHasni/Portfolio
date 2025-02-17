import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "Python", level: 70 },
  { name: "SQL", level: 65 },
]

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Mes Compétences</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{skill.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={skill.level} className="w-full" />
              <span className="text-sm text-muted-foreground mt-2">{skill.level}%</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

