"use client"

import * as React from "react"
import { PORTFOLIO_DATA } from "@/lib/portfolio-data"
import { Badge } from "@workspace/ui/components/badge"
import { Card, CardContent } from "@workspace/ui/components/card"
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  CheckCircle2,
  Building2,
  Sparkles,
} from "lucide-react"

export function EducationSection() {
  const { education } = PORTFOLIO_DATA

  return (
    <section id="education" className="py-20 md:py-28 bg-muted/20 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border-primary/30">
            Academic Background
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Educational Qualification
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Engineering foundation grounded in computer science principles, hardware-software integration, and analytical problem-solving.
          </p>
        </div>

        <div className="mt-14 max-w-4xl mx-auto">
          {/* Main RUET Qualification Card */}
          <Card className="overflow-hidden border-border/80 bg-card shadow-lg relative">
            {/* Top decorative gradient bar */}
            <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-primary to-indigo-600" />

            <CardContent className="p-6 sm:p-8 md:p-10 space-y-8">
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-6 border-b border-border/50">
                <div className="flex items-start gap-4">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-xs">
                    <GraduationCap className="size-8" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                        {education.institutionShort}
                      </span>
                      <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <Sparkles className="size-3" />
                        {education.status}
                      </span>
                    </div>

                    <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      {education.institution}
                    </h3>
                    <p className="mt-1 text-base font-semibold text-primary">
                      {education.degree}
                    </p>
                    <p className="text-sm font-medium text-foreground/80">
                      Department of {education.department}
                    </p>
                  </div>
                </div>

                {/* Duration & Location Badges */}
                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2.5 shrink-0">
                  <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-muted/60 px-3 py-1.5 text-xs font-semibold text-foreground">
                    <Calendar className="size-3.5 text-primary" />
                    <span>{education.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="size-3.5 text-muted-foreground" />
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>

              {/* Institution Overview narrative */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <Building2 className="size-4 text-primary" />
                  <span>Academic Engineering Discipline</span>
                </h4>
                <p className="mt-2 text-sm sm:text-base text-foreground/80 leading-relaxed">
                  {education.description}
                </p>
              </div>

              {/* Key Relevant Coursework Grid */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-3">
                  <BookOpen className="size-4 text-primary" />
                  <span>Key Engineering & Computing Coursework</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {education.keyCoursework.map((course) => (
                    <div
                      key={course}
                      className="flex items-center gap-2 rounded-lg border border-border/60 bg-muted/40 px-3 py-2 text-xs font-medium text-foreground hover:bg-muted/80 transition-colors"
                    >
                      <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights & Extracurriculars */}
              <div className="pt-4 border-t border-border/50">
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-3">
                  <Award className="size-4 text-primary" />
                  <span>Key Highlights & Engineering Focus</span>
                </h4>
                <div className="space-y-2">
                  {education.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                      <span className="mt-1 size-1.5 rounded-full bg-primary shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
