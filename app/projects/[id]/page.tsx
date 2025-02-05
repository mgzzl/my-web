import { notFound } from "next/navigation"
import { projects } from "@/lib/projects"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function ProjectPage({ params }: { params: { id: string } }) {
const project = projects.find(p => p.id === params.id)

if (!project) {
return notFound()
}

return (
<div className="py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid gap-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        {project.imageUrl && (
        <div className="grid gap-4">
          <div className="aspect-video rounded-lg overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <Image src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" width={800}
              height={450} />
            </AspectRatio>
          </div>
        </div>
        )}
        <p className="text-lg text-muted-foreground">{project.description}</p>
        <div className="flex gap-2 flex-wrap">
          {project.technologies.map((tech) => (
          <span key={tech} className="bg-secondary px-2 py-1 rounded text-sm">
            {tech}
          </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
)
}