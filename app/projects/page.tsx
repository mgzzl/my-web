import { Card } from "@/components/ui/card"
import Link from "next/link"
import { projects } from "@/lib/projects"

export default function ProjectsPage() {

  return (
    <div className="relative py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
            <Card key={project.title} className="p-6 hover:bg-accent transition-colors">
              <Link key={project.id} href={`/projects/${project.id}`}>
                  <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-secondary px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
              </Link>
            </Card>
        ))}
      </div>
    </div>
  )
}
