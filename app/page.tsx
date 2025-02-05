"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"
import { WordFadeIn } from '@/components/ui/word-fade-in';
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import {
Select,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue,
} from "@/components/ui/select"
import TypeWriter from "@/components/type-writer"
import { projects } from "@/lib/projects"

export default function Home() {
const {} = useTheme()
const { toast } = useToast()
const latestProjects = projects.slice(-3).reverse()

return (
<div className="relative py-8">
  <section className="mb-16">
    <h1 className="text-4xl font-bold mb-4">{`Hi, I'm Max!`}</h1>
    <p className="text-2xl text-muted-foreground mb-8">
      <TypeWriter phrases={["Software Engineer", "AI-Artist" , "Web-Developer" ]} />
    </p>
  </section>

  <section className="mb-16">
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-2xl font-bold">Latest Projects</h2>
      <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">
      View all projects →
      </Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {latestProjects.map((project) => (
      <Card key={project.title} className="p-6 hover:bg-accent transition-colors">
        <Link key={project.id} href={`/projects/${project.id}`}>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
        </Link>
      </Card>
      ))}
    </div>
  </section>

  <section>
    <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
    <div className="flex flex-col-reverse md:flex-row items-start gap-8">
      <Card className="p-6 w-full md:w-[500px]">
        <form>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="purpose">Purpose</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="work">Work Opportunity</SelectItem>
                  <SelectItem value="collab">Collaboration</SelectItem>
                  <SelectItem value="question">Question</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end">
              <Button variant="ghost" className="flex justify-end" onClick={() => {
                  toast({
                    title: "Thanks for reaching out!",
                    description: "I will get to you as soon as possible.",
                  })
                }}
              >
                <Send className="h-4 w-4"></Send>
              </Button>
            </div>
          </div>
        </form>
      </Card>
      <Toaster />
      <div className="max-w-md animate-fade-in w-full">
        {/* <p className="text-xl mb-4">Create something amazing together!</p> */}
        <WordFadeIn words="Create something amazing together" delay={0.25} />
      </div>
    </div>
  </section>
</div>
)
}
