"use client"

import * as React from "react"
import { PORTFOLIO_DATA } from "@/lib/portfolio-data"
import { Button } from "@workspace/ui/components/button"
import { Badge } from "@workspace/ui/components/badge"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Send,
  Check,
  Copy,
  ExternalLink,
  Sparkles,
  Loader2,
  CheckCircle2,
} from "lucide-react"

export function ContactSection() {
  const { contact } = PORTFOLIO_DATA
  const [copiedType, setCopiedType] = React.useState<string | null>(null)

  // Form states
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopiedType(type)
    setTimeout(() => setCopiedType(null), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 1200)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/20 border-t border-border/40 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border-primary/30">
            Get In Touch
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Let&apos;s Build Something Impactful Together
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Have a project proposal, an engineering opportunity, or simply want to discuss web architectures? I am always happy to connect!
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 items-start">
          {/* Left Column: Direct Contact Methods (5 cols) */}
          <div className="space-y-4 lg:col-span-5">
            <h3 className="text-xl font-bold tracking-tight text-foreground">
              Direct Contact Information
            </h3>
            <p className="text-sm text-muted-foreground">
              Choose your preferred channel below. I typically respond within a few hours.
            </p>

            {/* Email Card */}
            <Card className="border-border/60 bg-card hover:border-primary/40 transition-colors">
              <CardContent className="p-4 sm:p-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 shrink-0">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase">Email Address</span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="block text-sm font-bold text-foreground hover:text-primary transition-colors truncate max-w-[200px] sm:max-w-[240px]"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleCopy(contact.email, "email")}
                    className="size-8 text-muted-foreground hover:text-foreground"
                    title="Copy Email"
                  >
                    {copiedType === "email" ? (
                      <Check className="size-4 text-emerald-500" />
                    ) : (
                      <Copy className="size-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="border-border/60 bg-card hover:border-primary/40 transition-colors">
              <CardContent className="p-4 sm:p-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500 shrink-0">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase">Phone Number</span>
                    <a
                      href={`tel:${contact.phone}`}
                      className="block text-sm font-bold text-foreground hover:text-primary transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleCopy(contact.phone, "phone")}
                    className="size-8 text-muted-foreground hover:text-foreground"
                    title="Copy Phone"
                  >
                    {copiedType === "phone" ? (
                      <Check className="size-4 text-emerald-500" />
                    ) : (
                      <Copy className="size-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Card */}
            <Card className="border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/50 transition-colors">
              <CardContent className="p-4 sm:p-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <MessageSquare className="size-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase">
                      Instant WhatsApp
                    </span>
                    <p className="text-sm font-bold text-foreground">
                      Chat directly on WhatsApp
                    </p>
                  </div>
                </div>

                <Button
                  asChild
                  size="sm"
                  className="bg-emerald-600 text-white hover:bg-emerald-700 gap-1.5 shadow-xs"
                >
                  <a
                    href={contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Message</span>
                    <ExternalLink className="size-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Location & Availability Note */}
            <div className="rounded-xl border border-border/60 bg-card p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-muted-foreground">
                <MapPin className="size-4 text-primary" />
                <span>Current Base</span>
              </div>
              <p className="text-sm font-medium text-foreground">
                {contact.location}
              </p>
              <p className="text-xs text-muted-foreground">
                {contact.availability}
              </p>
            </div>
          </div>

          {/* Right Column: Functional Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <Card className="border-border/80 bg-card shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    Send Me a Message
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fill out the form below, and I will get back to your inbox promptly.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center space-y-3 animate-in zoom-in-95">
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="size-6" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground">
                      Message Received Successfully!
                    </h4>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                      Thank you for reaching out. I have received your message and will reply via email shortly.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-2 text-xs"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="name"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Your Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Alex Morgan"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Email Address <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="alex@company.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="subject"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Subject <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="Project Collaboration / Job Opportunity"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Your Message <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Hello Mahfuzul, I came across your portfolio and would like to talk about..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full gap-2 font-semibold shadow-md"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="size-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
