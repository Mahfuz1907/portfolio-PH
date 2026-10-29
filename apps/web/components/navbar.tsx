"use client"

import * as React from "react"
import Link from "next/link"
import { PORTFOLIO_DATA } from "@/lib/portfolio-data"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@workspace/ui/components/button"
import { Download, Menu, X, Code2 } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("")
  const [scrolled, setScrolled] = React.useState(false)

  // Track scroll position for navbar styling & active section
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = PORTFOLIO_DATA.navLinks.map((item) =>
        item.href.replace("#", "")
      )

      const scrollPosition = window.scrollY + 120

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.replace("#", "")
      const el = document.getElementById(targetId)
      if (el) {
        const yOffset = -72 // navbar height offset
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: "smooth" })
      }
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-background/85 backdrop-blur-md shadow-xs"
          : "border-b border-transparent bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-bold tracking-tight text-foreground transition-all duration-200"
        >
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-xs transition-transform duration-300 group-hover:scale-105">
            <Code2 className="size-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold leading-tight tracking-tight">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-[11px] font-medium text-muted-foreground">
              RUET • ECE
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main Navigation">
          {PORTFOLIO_DATA.navLinks.map((link) => {
            const sectionId = link.href.replace("#", "")
            const isActive = activeSection === sectionId

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-3.5 bottom-0 h-0.5 rounded-full bg-primary animate-in fade-in" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Action Controls & Theme Toggle */}
        <div className="hidden items-center gap-3 md:flex">
          <ModeToggle />
          <Button
            asChild
            size="sm"
            className="gap-2 shadow-xs transition-transform active:scale-95"
          >
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download="MD_Mahfuzul_Alam_Resume.pdf"
            >
              <Download className="size-3.5" />
              <span>Resume</span>
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="size-9 rounded-lg border border-border/40"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="border-b border-border/50 bg-background/95 px-4 pt-2 pb-6 backdrop-blur-xl md:hidden animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {PORTFOLIO_DATA.navLinks.map((link) => {
              const sectionId = link.href.replace("#", "")
              const isActive = activeSection === sectionId

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="size-2 rounded-full bg-primary" />
                  )}
                </a>
              )
            })}
            <div className="pt-2">
              <Button asChild className="w-full gap-2">
                <a
                  href={PORTFOLIO_DATA.personal.resumeUrl}
                  download="MD_Mahfuzul_Alam_Resume.pdf"
                >
                  <Download className="size-4" />
                  <span>Download Resume</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
