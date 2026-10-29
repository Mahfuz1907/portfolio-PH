"use client"

import * as React from "react"
import { PORTFOLIO_DATA, Project } from "@/lib/portfolio-data"
import { Badge } from "@workspace/ui/components/badge"
import { ProjectCard } from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null)
  const [activeFilter, setActiveFilter] = React.useState<string>("All")

  const categories = [
    "All",
    "Full-Stack Web App",
    "E-Commerce & Fintech",
    "Productivity & AI",
    "Healthcare & WebRTC",
  ]

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (activeFilter === "All") return true
    return p.category === activeFilter
  })

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border-primary/30">
            Featured Works
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Highlighted Projects & Applications
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            A selection of production-grade full-stack web applications featuring real-time synchronization, distributed architectures, and intuitive modern interfaces.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Responsive Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
