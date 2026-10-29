"use client"

import * as React from "react"
import { PORTFOLIO_DATA } from "@/lib/portfolio-data"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import {
  Code2,
  Users,
  Camera,
  Coffee,
  Sparkles,
  HeartHandshake,
  Cpu,
  Layers,
  CheckCircle,
} from "lucide-react"

export function AboutSection() {
  const getHobbyIcon = (icon: string) => {
    switch (icon) {
      case "Users":
        return <Users className="size-5 text-blue-500" />
      case "Code2":
        return <Code2 className="size-5 text-indigo-500" />
      case "Camera":
        return <Camera className="size-5 text-amber-500" />
      case "Coffee":
        return <Coffee className="size-5 text-amber-700 dark:text-amber-400" />
      default:
        return <Sparkles className="size-5 text-primary" />
    }
  }

  return (
    <section id="about" className="py-20 md:py-28 bg-muted/20 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border-primary/30">
            About Me
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Architecting Scalable Code & Crafting Meaningful Interfaces
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Get to know my engineering journey, the technologies I love working with, and what drives me inside and outside of software development.
          </p>
        </div>

        {/* Stats Row */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {PORTFOLIO_DATA.about.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-xl border border-border/60 bg-card p-5 text-center shadow-xs transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="text-3xl font-black text-primary sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Left Column: Programming Journey Narrative (7 cols) */}
          <div className="space-y-6 lg:col-span-7">
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Code2 className="size-4" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                My Programming Journey
              </h3>
            </div>

            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              {PORTFOLIO_DATA.about.journey.map((paragraph, idx) => (
                <p key={idx} className="text-foreground/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Favorite Work & Tech Stacks Enjoyed */}
            <div className="pt-6 border-t border-border/50">
              <h4 className="text-base font-bold text-foreground flex items-center gap-2">
                <Layers className="size-4 text-primary" />
                <span>Work & Tech Stacks I Truly Enjoy</span>
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                I thrive at the intersection of modern frontend elegance and robust backend engineering. My favorite daily stack is centered around:
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-border/70 bg-card/60 p-3.5 shadow-xs">
                  <div className="font-semibold text-sm text-foreground flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-blue-500" />
                    React & Next.js
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Server Components, App Router, responsive interfaces & smooth interactions.
                  </p>
                </div>

                <div className="rounded-lg border border-border/70 bg-card/60 p-3.5 shadow-xs">
                  <div className="font-semibold text-sm text-foreground flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-emerald-500" />
                    Node.js & Express
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    RESTful APIs, microservices, secure authentication & real-time WebSockets.
                  </p>
                </div>

                <div className="rounded-lg border border-border/70 bg-card/60 p-3.5 shadow-xs">
                  <div className="font-semibold text-sm text-foreground flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-cyan-500" />
                    TypeScript & Tailwind
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    End-to-end type safety, atomic styling, clean maintainable codebases.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Personality, Hobbies & Engineering Core (5 cols) */}
          <div className="space-y-6 lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <HeartHandshake className="size-4" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Life & Hobbies Outside Code
              </h3>
            </div>

            <p className="text-sm text-muted-foreground">
              Great software engineers are multidimensional. When I step away from the keyboard, these passions keep me energized and inspired:
            </p>

            <div className="space-y-3.5">
              {PORTFOLIO_DATA.about.personalityAndHobbies.map((hobby) => (
                <Card
                  key={hobby.title}
                  className="border-border/60 bg-card/70 hover:bg-card hover:border-primary/30 transition-all duration-200"
                >
                  <CardContent className="p-4 flex items-start gap-3.5">
                    <div className="mt-0.5 rounded-lg border border-border/50 bg-muted/60 p-2 shrink-0">
                      {getHobbyIcon(hobby.icon)}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        {hobby.title}
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {hobby.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Engineering Principles Card */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-foreground">
                <Cpu className="size-4 text-primary" />
                <span>My Engineering Commitment</span>
              </div>
              <ul className="mt-2.5 space-y-1.5 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="size-3.5 text-emerald-500 shrink-0" />
                  <span>Clean, readable, self-documenting TypeScript code</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="size-3.5 text-emerald-500 shrink-0" />
                  <span>Accessibility (a11y) and responsive-first design</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="size-3.5 text-emerald-500 shrink-0" />
                  <span>Performance optimization & zero hydration issues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
