import * as React from "react"
import {
  Code,
  ShoppingCart,
  Kanban,
  HeartPulse,
  Circle,
  ExternalLink,
  Sparkles,
} from "lucide-react"

interface ProjectMockupProps {
  type: "collaboration" | "ecommerce" | "kanban" | "healthcare"
  title: string
}

export function ProjectMockup({ type, title }: ProjectMockupProps) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-gradient-to-br from-muted/90 via-card to-background border-b border-border/50 p-3 select-none flex flex-col justify-between group-hover:scale-[1.01] transition-transform duration-300">
      {/* Mock browser header */}
      <div className="flex items-center justify-between pb-2 border-b border-border/40 text-[11px] text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-red-500/80" />
          <span className="size-2.5 rounded-full bg-amber-500/80" />
          <span className="size-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="rounded-md bg-muted px-3 py-0.5 text-[10px] font-mono text-muted-foreground/80 truncate max-w-[180px]">
          app.{title.toLowerCase().replace(/[^a-z0-9]/g, "")}.io
        </div>
        <div className="flex items-center gap-1">
          <Circle className="size-2 fill-emerald-500 text-emerald-500" />
          <span className="text-[9px] uppercase font-bold text-emerald-600 dark:text-emerald-400">Live</span>
        </div>
      </div>

      {/* Main mockup content based on type */}
      <div className="my-auto py-2">
        {type === "collaboration" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-blue-500/10 p-1 text-blue-500">
                  <Code className="size-4" />
                </div>
                <span className="text-xs font-semibold text-foreground">CodeReviewRoom.tsx</span>
              </div>
              <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary font-mono">
                Socket: 4 peers
              </span>
            </div>
            <div className="rounded-md bg-muted/60 p-2 font-mono text-[10px] text-muted-foreground space-y-1">
              <div className="text-emerald-500">// Real-time collaborative code review</div>
              <div><span className="text-blue-500">export function</span> SyncBoard({`{ users, socket }`})</div>
              <div className="pl-3 text-purple-400">return &lt;KanbanCol tasks={'{tasks}'} /&gt;</div>
            </div>
          </div>
        )}

        {type === "ecommerce" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-emerald-500/10 p-1 text-emerald-500">
                  <ShoppingCart className="size-4" />
                </div>
                <span className="text-xs font-semibold text-foreground">Storefront & Checkout</span>
              </div>
              <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                Stripe Verified
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-md border border-border/50 bg-card p-1.5 text-center">
                  <div className="h-6 w-full rounded bg-muted/80 mb-1" />
                  <div className="h-2 w-3/4 mx-auto bg-muted rounded" />
                  <div className="h-2 w-1/2 mx-auto bg-primary/40 rounded mt-1" />
                </div>
              ))}
            </div>
          </div>
        )}

        {type === "kanban" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-purple-500/10 p-1 text-purple-500">
                  <Kanban className="size-4" />
                </div>
                <span className="text-xs font-semibold text-foreground">Sprint Kanban Board</span>
              </div>
              <span className="flex items-center gap-1 rounded bg-purple-500/10 px-1.5 py-0.5 text-[10px] text-purple-600 dark:text-purple-400 font-semibold">
                <Sparkles className="size-2.5" /> AI Assisted
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded border border-border/40 bg-muted/40 p-1.5 text-[10px]">
                <div className="font-semibold text-muted-foreground pb-1">To Do (4)</div>
                <div className="rounded bg-card p-1 shadow-xs border border-border/40 text-[9px] truncate">
                  Setup OAuth2
                </div>
              </div>
              <div className="rounded border border-primary/30 bg-primary/5 p-1.5 text-[10px]">
                <div className="font-semibold text-primary pb-1">In Progress (2)</div>
                <div className="rounded bg-card p-1 shadow-xs border border-primary/20 text-[9px] truncate">
                  AI Task Parser
                </div>
              </div>
              <div className="rounded border border-emerald-500/30 bg-emerald-500/5 p-1.5 text-[10px]">
                <div className="font-semibold text-emerald-600 dark:text-emerald-400 pb-1">Done (12)</div>
                <div className="rounded bg-card p-1 shadow-xs border border-border/40 text-[9px] truncate">
                  DB Indexing
                </div>
              </div>
            </div>
          </div>
        )}

        {type === "healthcare" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-rose-500/10 p-1 text-rose-500">
                  <HeartPulse className="size-4" />
                </div>
                <span className="text-xs font-semibold text-foreground">Consultation Portal</span>
              </div>
              <span className="rounded bg-rose-500/10 px-1.5 py-0.5 text-[10px] text-rose-600 dark:text-rose-400 font-semibold">
                WebRTC P2P
              </span>
            </div>
            <div className="rounded-md border border-border/50 bg-card p-2 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="size-7 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-600 font-bold text-[11px]">
                  Dr
                </div>
                <div>
                  <div className="font-semibold text-[11px] text-foreground">Specialist Available</div>
                  <div className="text-[9px] text-muted-foreground">Video Session Ready</div>
                </div>
              </div>
              <div className="rounded bg-primary px-2 py-1 text-[10px] font-semibold text-primary-foreground">
                Join Call
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Subtle indicator bar */}
      <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1 border-t border-border/30">
        <span className="font-medium">Responsive Next.js View</span>
        <span className="flex items-center gap-1 text-primary">
          <ExternalLink className="size-3" />
          Interactive Web App
        </span>
      </div>
    </div>
  )
}
