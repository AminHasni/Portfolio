import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Senior Developer",
    company: "Tech Innovators Inc.",
    period: "2020 - Present",
    description:
      "Lead developer for multiple high-profile projects, mentoring junior developers, and implementing best practices.",
  },
  {
    title: "Full Stack Developer",
    company: "Web Solutions Ltd.",
    period: "2017 - 2020",
    description: "Developed and maintained various web applications using React, Node.js, and PostgreSQL.",
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    period: "2015 - 2017",
    description:
      "Assisted in the development of mobile-responsive websites and contributed to the company's main product.",
  },
]

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Mon Expérience Professionnelle</h1>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="relative overflow-hidden">
            <div className="absolute top-0 left-6 h-full w-px bg-muted-foreground"></div>
            <CardHeader className="relative">
              <div className="absolute top-0 left-6 w-3 h-3 -translate-x-1/2 rounded-full bg-primary"></div>
              <CardTitle>{exp.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {exp.company} | {exp.period}
              </p>
            </CardHeader>
            <CardContent>
              <p>{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

