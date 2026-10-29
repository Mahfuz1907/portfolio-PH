"use client"

import * as React from "react"
import { PORTFOLIO_DATA, SkillItem } from "@/lib/portfolio-data"
import { Badge } from "@workspace/ui/components/badge"
import { Card, CardContent } from "@workspace/ui/components/card"
import {
  Layout,
  Server,
  Wrench,
  Atom,
  Globe,
  FileCode2,
  Palette,
  Layers,
  Code,
  Sparkles,
  Component,
  Cpu,
  Route,
  Database,
  Workflow,
  Boxes,
  ShieldCheck,
  Radio,
  Network,
  GitBranch,
  Terminal,
  Send,
  Cloud,
  Box,
  Package,
  Command,
} from "lucide-react"
import { FigmaIcon } from "@/components/icons"

export function SkillsSection() {
  const [activeTab, setActiveTab] = React.useState<"all" | "Frontend" | "Tools">("all")

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "Atom":
        return <Atom className="size-5" />
      case "Globe":
        return <Globe className="size-5" />
      case "FileCode2":
        return <FileCode2 className="size-5" />
      case "Palette":
        return <Palette className="size-5" />
      case "Layers":
        return <Layers className="size-5" />
      case "Code":
        return <Code className="size-5" />
      case "Sparkles":
        return <Sparkles className="size-5" />
      case "Component":
        return <Component className="size-5" />
      case "Cpu":
        return <Cpu className="size-5" />
      case "Route":
        return <Route className="size-5" />
      case "Database":
        return <Database className="size-5" />
      case "Workflow":
        return <Workflow className="size-5" />
      case "Boxes":
        return <Boxes className="size-5" />
      case "ShieldCheck":
        return <ShieldCheck className="size-5" />
      case "Radio":
        return <Radio className="size-5" />
      case "Network":
        return <Network className="size-5" />
      case "GitBranch":
        return <GitBranch className="size-5" />
      case "Terminal":
        return <Terminal className="size-5" />
      case "Send":
        return <Send className="size-5" />
      case "Cloud":
        return <Cloud className="size-5" />
      case "Box":
        return <Box className="size-5" />
      case "Figma":
        return <FigmaIcon className="size-5" />
      case "Package":
        return <Package className="size-5" />
      case "Command":
        return <Command className="size-5" />
      default:
        return <Code className="size-5" />
    }
  }

  const getCategoryIcon = (title: string) => {
    if (title.includes("Frontend")) return <Layout className="size-5 text-blue-500" />
    return <Wrench className="size-5 text-amber-500" />
  }

  const filteredCategories = PORTFOLIO_DATA.skills.filter((category) => {
    if (activeTab === "all") return true
    if (activeTab === "Frontend") return category.title.includes("Frontend")
    if (activeTab === "Tools") return category.title.includes("Tools")
    return true
  })

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border-primary/30">
            Technical Proficiency
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Skills & Modern Tech Stacks
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            A comprehensive overview of my technical capabilities spanning responsive frontend engineering, scalable backend architecture, and developer tooling.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: "all", label: "All Technologies" },
              { id: "Frontend", label: "Frontend Stack" },
              { id: "Tools", label: "Tools & DevOps" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.title} className="space-y-6">
              {/* Category Subheader */}
              <div className="flex items-center gap-3 border-b border-border/60 pb-3">
                <div className="rounded-lg bg-muted p-2">{getCategoryIcon(category.title)}</div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Card Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {category.skills.map((skill: SkillItem) => (
                  <Card
                    key={skill.name}
                    className="group border-border/60 bg-card hover:border-primary/40 hover:shadow-md transition-all duration-200"
                  >
                    <CardContent className="p-4 flex flex-col justify-between h-full space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`rounded-lg bg-muted/80 p-2 transition-transform duration-300 group-hover:scale-110 ${skill.color}`}
                          >
                            {getSkillIcon(skill.iconName)}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-foreground">
                              {skill.name}
                            </h4>
                          </div>
                        </div>
                        <Badge
                          variant={skill.level === "Advanced" ? "default" : "secondary"}
                          size="sm"
                          className="text-[10px] shrink-0"
                        >
                          {skill.level}
                        </Badge>
                      </div>

                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
