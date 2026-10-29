import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { PORTFOLIO_DATA } from "@/lib/portfolio-data"
import { Button } from "@workspace/ui/components/button"
import { Badge } from "@workspace/ui/components/badge"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  ArrowLeft,
  ExternalLink,
  Code2,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { GithubIcon } from "@/components/icons"

interface Props {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return PORTFOLIO_DATA.projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === id)
  if (!project) {
    return { title: "Project Not Found" }
  }
  return {
    title: `${project.title} - ${PORTFOLIO_DATA.personal.name}`,
    description: project.briefDescription,
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  const otherProjects = PORTFOLIO_DATA.projects.filter((p) => p.id !== id)

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Back Link */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="size-4" />
              <span>Back to All Projects</span>
            </Link>

            <Badge variant="outline" className="text-primary border-primary/30">
              {project.category}
            </Badge>
          </div>

          {/* Project Title & Tagline */}
          <div className="space-y-3">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-foreground">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Action Links Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-3 pb-8 border-b border-border/50">
            <Button asChild size="lg" className="gap-2 shadow-md">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="size-4" />
                <span>Visit Live Website</span>
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="gap-2 border-border/80">
              <a
                href={project.githubClientUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="size-4" />
                <span>GitHub Client Repo</span>
              </a>
            </Button>

            {project.githubServerUrl && (
              <Button asChild variant="ghost" size="lg" className="gap-2 text-muted-foreground hover:text-foreground">
                <a
                  href={project.githubServerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code2 className="size-4" />
                  <span>GitHub Server Repo</span>
                </a>
              </Button>
            )}
          </div>

          {/* Large Project Image Banner */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-border/70 bg-card shadow-xl">
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              <Image
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
                priority
              />
            </div>
          </div>

          {/* Deep Content Grid */}
          <div className="mt-12 space-y-10">
            {/* Main Technology Stack Used */}
            <div className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Layers className="size-4 text-primary" />
                <span>Main Technology Stack Used</span>
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {project.mainStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="border border-border/70 bg-muted/80 px-3 py-1.5 text-xs font-semibold text-foreground"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Brief & In-depth Overview */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Project Overview & Architecture
              </h2>
              <p className="text-base text-foreground/85 leading-relaxed">
                {project.briefDescription}
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                {project.detailedDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Key Features & Capabilities
              </h2>
              <div className="grid gap-3 sm:grid-cols-1">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/60 p-4 text-sm text-foreground/90"
                  >
                    <CheckCircle2 className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges Faced During Development */}
            <Card className="border-amber-500/30 bg-amber-500/5 shadow-xs">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2.5 text-amber-700 dark:text-amber-400 font-bold text-lg">
                  <AlertTriangle className="size-5 shrink-0" />
                  <span>Challenges Faced & Technical Solutions</span>
                </div>
                <div className="space-y-4">
                  {project.challenges.map((challenge, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-foreground/85 leading-relaxed">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-700 dark:text-amber-300">
                        {idx + 1}
                      </span>
                      <span>{challenge}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Potential Improvements and Future Plans */}
            <Card className="border-blue-500/30 bg-blue-500/5 shadow-xs">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2.5 text-blue-700 dark:text-blue-400 font-bold text-lg">
                  <Lightbulb className="size-5 shrink-0" />
                  <span>Potential Improvements & Future Roadmap</span>
                </div>
                <div className="space-y-3">
                  {project.improvements.map((improvement, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-foreground/85 leading-relaxed">
                      <Sparkles className="size-4 text-blue-500 shrink-0 mt-1" />
                      <span>{improvement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Other Projects Quick Navigation */}
            <div className="pt-12 border-t border-border/50">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl mb-6">
                Explore More Projects
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {otherProjects.map((p) => (
                  <Link
                    key={p.id}
                    href={`/projects/${p.id}`}
                    className="group rounded-xl border border-border/60 bg-card overflow-hidden hover:border-primary/40 hover:shadow-md transition-all flex flex-col"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-full h-36 bg-muted overflow-hidden">
                      <Image
                        src={p.imageUrl}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-1">
                      <div>
                        <span className="text-[11px] font-semibold text-primary uppercase">
                          {p.category}
                        </span>
                        <h3 className="mt-1 font-bold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {p.title}
                        </h3>
                      </div>
                      <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-primary">
                        <span>View Project</span>
                        <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
