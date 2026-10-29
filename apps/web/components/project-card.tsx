"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Project } from "@/lib/portfolio-data"
import { Card, CardContent, CardFooter } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { ExternalLink, Eye, ArrowRight } from "lucide-react"
import { GithubIcon } from "@/components/icons"

interface ProjectCardProps {
  project: Project
  onSelectProject: (project: Project) => void
}

export function ProjectCard({ project, onSelectProject }: ProjectCardProps) {
  return (
    <Card className="group flex flex-col justify-between overflow-hidden border-border/70 bg-card hover:border-primary/40 hover:shadow-xl transition-all duration-300">
      <div>
        {/* Project Image Preview */}
        <div className="relative w-full h-48 overflow-hidden bg-muted">
          <Image
            src={project.imageUrl}
            alt={`${project.title} preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <CardContent className="p-5 sm:p-6 space-y-4">
          {/* Category & Status */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              {project.category}
            </span>
            {project.featured && (
              <Badge variant="secondary" size="sm" className="text-[10px] bg-primary/10 text-primary border-primary/20">
                Featured
              </Badge>
            )}
          </div>

          {/* Project Name */}
          <h3
            onClick={() => onSelectProject(project)}
            className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors cursor-pointer"
          >
            {project.title}
          </h3>

          {/* Brief Description */}
          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {project.briefDescription}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.mainStack.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                size="sm"
                className="text-[11px] font-medium border-border/70 bg-muted/30"
              >
                {tech}
              </Badge>
            ))}
            {project.mainStack.length > 4 && (
              <Badge
                variant="outline"
                size="sm"
                className="text-[11px] font-medium text-muted-foreground"
              >
                +{project.mainStack.length - 4} more
              </Badge>
            )}
          </div>
        </CardContent>
      </div>

      {/* Card Actions Footer */}
      <CardFooter className="p-5 sm:p-6 pt-0 border-t border-border/40 mt-4 flex items-center justify-between gap-2">
        {/* View Details / View More Primary Action */}
        <Button
          variant="default"
          size="sm"
          onClick={() => onSelectProject(project)}
          className="gap-1.5 text-xs font-semibold shadow-xs"
        >
          <Eye className="size-3.5" />
          <span>View Details</span>
        </Button>

        {/* Live & GitHub Icon Links */}
        <div className="flex items-center gap-1.5">
          <Button
            asChild
            variant="ghost"
            size="icon-sm"
            className="text-muted-foreground hover:text-foreground"
            title="Open Live Preview"
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live preview of ${project.title}`}
            >
              <ExternalLink className="size-4" />
            </a>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="icon-sm"
            className="text-muted-foreground hover:text-foreground"
            title="View GitHub Repository"
          >
            <a
              href={project.githubClientUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub Client Repository for ${project.title}`}
            >
              <GithubIcon className="size-4" />
            </a>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="icon-sm"
            className="text-muted-foreground hover:text-primary"
            title="Dedicated Page"
          >
            <Link href={`/projects/${project.id}`} aria-label={`Dedicated page for ${project.title}`}>
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
