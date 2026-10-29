"use client"

import * as React from "react"
import Image from "next/image"
import { PORTFOLIO_DATA } from "@/lib/portfolio-data"
import { Button } from "@workspace/ui/components/button"
import { Badge } from "@workspace/ui/components/badge"
import {
  Download,
  Mail,
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  Terminal,
} from "lucide-react"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons"

export function HeroSection() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const yOffset = -72
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background ambient lighting effects */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-125 w-200 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl dark:bg-primary/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -left-32 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-32 -z-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/15"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline, Bio & CTAs (7 cols) */}
          <div className="flex flex-col items-start text-left lg:col-span-7">
            {/* Availability Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for Full-Time Roles & Opportunities</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
              Hi, I&apos;m{" "}
              <span className="bg-linear-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-primary dark:via-blue-400 dark:to-indigo-400">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </h1>

            {/* Professional Designation */}
            <div className="mt-3 flex items-center gap-2">
              <Sparkles className="size-5 text-amber-500 dark:text-amber-400 shrink-0" />
              <p className="text-xl font-bold tracking-tight text-foreground/90 sm:text-2xl">
                {PORTFOLIO_DATA.personal.title}
              </p>
            </div>

            {/* Location & Academic Affiliation */}
            <div className="mt-2 flex flex-wrap items-center gap-y-1 gap-x-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="size-4 text-muted-foreground" />
                {PORTFOLIO_DATA.personal.location}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="font-medium text-foreground/80">
                RUET (ECE Department)
              </span>
            </div>

            {/* Engaging Biography Intro */}
            <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
              {PORTFOLIO_DATA.personal.shortBio}
            </p>

            {/* Key Tech Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">
                Core Stack:
              </span>
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"].map(
                (tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="border border-border/60 bg-muted/70 px-2.5 py-1 text-xs font-medium hover:border-primary/40 transition-colors"
                  >
                    {tech}
                  </Badge>
                )
              )}
            </div>

            {/* Call To Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              {/* Primary Download Resume Button */}
              <Button
                asChild
                size="lg"
                className="gap-2.5 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all font-semibold"
              >
                <a
                  href={PORTFOLIO_DATA.personal.resumeUrl}
                  download="MD_Mahfuzul_Alam_Resume.pdf"
                >
                  <Download className="size-4" />
                  <span>Download Resume</span>
                </a>
              </Button>

              {/* View Projects CTA */}
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScrollTo("projects")}
                className="gap-2 border-border/80 hover:bg-muted font-medium"
              >
                <span>View Projects</span>
                <ArrowRight className="size-4" />
              </Button>

              {/* Contact Me CTA */}
              <Button
                variant="ghost"
                size="lg"
                onClick={() => handleScrollTo("contact")}
                className="gap-2 text-muted-foreground hover:text-foreground font-medium"
              >
                <Mail className="size-4" />
                <span>Contact Me</span>
              </Button>
            </div>

            {/* Social Media Link Buttons */}
            <div className="mt-8 flex items-center gap-3 pt-4 border-t border-border/40 w-full max-w-md">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="size-9 rounded-full border-border/60 hover:text-primary hover:border-primary/50 transition-all"
                >
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="size-9 rounded-full border-border/60 hover:text-blue-600 hover:border-blue-500/50 transition-all"
                >
                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="size-9 rounded-full border-border/60 hover:text-sky-500 hover:border-sky-500/50 transition-all"
                >
                  <a
                    href={PORTFOLIO_DATA.personal.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X Profile"
                  >
                    <TwitterIcon className="size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Visual & Floating Engineering Cards (5 cols) */}
          <div className="flex justify-center lg:col-span-5">
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
              {/* Outer decorative gradient aura */}
              <div className="absolute -inset-1.5 rounded-3xl bg-linear-to-tr from-primary/40 via-blue-500/30 to-emerald-500/30 blur-xl opacity-70 transition duration-1000 group-hover:opacity-100 animate-pulse" />

              {/* Profile Card Container */}
              <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/90 p-5 shadow-2xl backdrop-blur-xl">
                {/* Visual Profile Photo / Graphic Area */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-linear-to-br from-muted via-muted/60 to-background border border-border/50 flex flex-col items-center justify-center p-6 text-center">
                  {/* Real Profile Photo with Glowing Ring */}
                  <div className="relative flex size-40 sm:size-44 items-center justify-center rounded-2xl bg-linear-to-tr from-primary/30 via-blue-500/20 to-emerald-500/30 p-1.5 ring-2 ring-primary/40 shadow-xl">
                    <div className="relative size-full overflow-hidden rounded-xl bg-card shadow-inner">
                      <Image
                        src={PORTFOLIO_DATA.personal.avatarUrl}
                        alt={PORTFOLIO_DATA.personal.name}
                        width={200}
                        height={200}
                        className="size-full object-cover object-top transition-transform duration-500 hover:scale-105"
                        priority
                      />
                    </div>
                    {/* Floating verified badge */}
                    <div
                      className="absolute -bottom-2 -right-2 rounded-full bg-primary p-1.5 text-primary-foreground shadow-lg ring-2 ring-background"
                      title="Verified RUET ECE Developer"
                    >
                      <CheckCircle2 className="size-4" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-foreground">
                      {PORTFOLIO_DATA.personal.name}
                    </h3>
                    <p className="text-xs font-semibold text-primary">
                      {PORTFOLIO_DATA.personal.title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Rajshahi University of Eng. & Tech. (RUET)
                    </p>
                  </div>

                  {/* Terminal-like Code snippet footer */}
                  <div className="mt-4 w-full rounded-lg bg-muted/80 p-2.5 font-mono text-[11px] text-left text-muted-foreground border border-border/40">
                    <div className="flex items-center gap-1.5 pb-1 border-b border-border/30 text-[10px] text-muted-foreground/80">
                      <span className="size-2 rounded-full bg-red-400" />
                      <span className="size-2 rounded-full bg-amber-400" />
                      <span className="size-2 rounded-full bg-emerald-400" />
                      <span className="ml-1 text-[9px]">developer@ruet:~$</span>
                    </div>
                    <div className="pt-1.5 text-foreground/90 font-mono">
                      <span className="text-emerald-500">const</span> stack = [
                      <span className="text-blue-500">&apos;React&apos;</span>,{" "}
                      <span className="text-blue-500">&apos;Next.js&apos;</span>,{" "}
                      <span className="text-blue-500">&apos;TypeScript&apos;</span>];
                    </div>
                  </div>
                </div>

                {/* Floating Metric Badges */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border/60 bg-muted/40 p-3 text-center">
                    <p className="text-xl font-extrabold text-foreground">RUET ECE</p>
                    <p className="text-[11px] font-medium text-muted-foreground">
                      2020 – Present
                    </p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-muted/40 p-3 text-center">
                    <p className="text-xl font-extrabold text-primary">10+ Apps</p>
                    <p className="text-[11px] font-medium text-muted-foreground">
                      Built & Deployed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
