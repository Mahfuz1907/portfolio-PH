"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Project } from "@/lib/portfolio-data"
import { Button } from "@workspace/ui/components/button"
import { Badge } from "@workspace/ui/components/badge"
import {
  X,
  ExternalLink,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Layers,
  ArrowRight,
  Code2,
} from "lucide-react"
import { GithubIcon } from "@/components/icons"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Listen for Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (project) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 size-8 rounded-full border border-border/40 hover:bg-muted"
          aria-label="Close project modal"
        >
          <X className="size-4" />
        </Button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="text-primary border-primary/30">
              {project.category}
            </Badge>
            {project.featured && (
              <Badge variant="default" className="text-[10px]">
                Featured Project
              </Badge>
            )}
          </div>

          <h2
            id="project-modal-title"
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            {project.title}
          </h2>

          <p className="text-sm font-medium text-muted-foreground sm:text-base">
            {project.tagline}
          </p>
        </div>

        {/* Project Image Banner */}
        <div className="relative mt-5 w-full h-52 sm:h-64 overflow-hidden rounded-xl border border-border/50 bg-muted">
          <Image
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        {/* Action Link Buttons */}
        <div className="mt-5 flex flex-wrap items-center gap-3 pb-6 border-b border-border/50">
          <Button asChild size="sm" className="gap-2 shadow-xs">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="size-3.5" />
              <span>Live Project Demo</span>
            </a>
          </Button>

          <Button asChild variant="outline" size="sm" className="gap-2">
            <a
              href={project.githubClientUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="size-3.5" />
              <span>GitHub Client Repo</span>
            </a>
          </Button>

          {project.githubServerUrl && (
            <Button asChild variant="ghost" size="sm" className="gap-2 text-muted-foreground">
              <a
                href={project.githubServerUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 className="size-3.5" />
                <span>Backend Repo</span>
              </a>
            </Button>
          )}

          <Button asChild variant="secondary" size="sm" className="ml-auto gap-1 text-xs">
            <Link href={`/projects/${project.id}`}>
              <span>Dedicated Page</span>
              <ArrowRight className="size-3" />
            </Link>
          </Button>
        </div>

        {/* Modal Body Content */}
        <div className="mt-6 space-y-6">
          {/* Main Technology Stack Used */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-2.5">
              <Layers className="size-4 text-primary" />
              <span>Main Technology Stack Used</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.mainStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="border border-border/60 bg-muted/80 px-2.5 py-1 text-xs font-semibold text-foreground"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Brief & Detailed Description */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">
              Project Overview & Architecture
            </h3>
            <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
              {project.detailedDescription}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Core Implemented Features
            </h3>
            <ul className="grid gap-2 sm:grid-cols-1">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges Faced During Development */}
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 sm:p-5">
            <h3 className="text-sm font-bold text-amber-700 dark:text-amber-400 flex items-center gap-2 mb-3">
              <AlertTriangle className="size-4 text-amber-600 shrink-0" />
              <span>Challenges Faced & Engineering Solutions</span>
            </h3>
            <div className="space-y-3">
              {project.challenges.map((challenge, idx) => (
                <div key={idx} className="text-xs sm:text-sm text-foreground/85 leading-relaxed flex items-start gap-2">
                  <span className="font-bold text-amber-600 dark:text-amber-400 shrink-0">
                    {idx + 1}.
                  </span>
                  <span>{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Potential Improvements & Future Plans */}
          <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 sm:p-5">
            <h3 className="text-sm font-bold text-blue-700 dark:text-blue-400 flex items-center gap-2 mb-3">
              <Lightbulb className="size-4 text-blue-600 shrink-0" />
              <span>Potential Improvements & Future Plans</span>
            </h3>
            <div className="space-y-2.5">
              {project.improvements.map((plan, idx) => (
                <div key={idx} className="text-xs sm:text-sm text-foreground/85 leading-relaxed flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                  <span>{plan}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-border/50 flex justify-end">
          <Button variant="outline" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
