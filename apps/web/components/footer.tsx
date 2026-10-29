"use client"

import * as React from "react"
import Link from "next/link"
import { PORTFOLIO_DATA } from "@/lib/portfolio-data"
import { Button } from "@workspace/ui/components/button"
import {
  Mail,
  ArrowUp,
  Heart,
  Code2,
} from "lucide-react"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.replace("#", "")
      const el = document.getElementById(targetId)
      if (el) {
        const yOffset = -72
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="border-t border-border/50 bg-card/60 backdrop-blur-sm text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-12 items-start justify-between">
          {/* Brand & Summary (5 cols) */}
          <div className="space-y-3 md:col-span-5">
            <div className="flex items-center gap-2 font-bold tracking-tight">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Code2 className="size-4" />
              </div>
              <span className="text-lg">{PORTFOLIO_DATA.personal.name}</span>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
              {PORTFOLIO_DATA.personal.title} from{" "}
              <span className="font-semibold text-foreground/90">
                Rajshahi University of Engineering & Technology (RUET)
              </span>
              . Building reliable, high-performance web applications.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="size-8 rounded-full border-border/60 hover:text-primary hover:border-primary/50"
              >
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GithubIcon className="size-3.5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="size-8 rounded-full border-border/60 hover:text-blue-600 hover:border-blue-500/50"
              >
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="size-3.5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="size-8 rounded-full border-border/60 hover:text-sky-500 hover:border-sky-500/50"
              >
                <a
                  href={PORTFOLIO_DATA.personal.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                >
                  <TwitterIcon className="size-3.5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="size-8 rounded-full border-border/60 hover:text-emerald-500 hover:border-emerald-500/50"
              >
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  aria-label="Email"
                >
                  <Mail className="size-3.5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="space-y-3 md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {PORTFOLIO_DATA.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Back To Top & Badge (3 cols) */}
          <div className="flex flex-col items-start md:items-end justify-between space-y-4 md:col-span-3">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="gap-2 text-xs font-semibold rounded-full border-border/70 hover:border-primary/50"
            >
              <span>Back to Top</span>
              <ArrowUp className="size-3.5" />
            </Button>

            <div className="text-left md:text-right text-[11px] text-muted-foreground">
              <p>Designed & Built with</p>
              <p className="font-medium text-foreground/85">
                Next.js, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Rajshahi University of Engineering & Technology (RUET)
          </p>
        </div>
      </div>
    </footer>
  )
}
