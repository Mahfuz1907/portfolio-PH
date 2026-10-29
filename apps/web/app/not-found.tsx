import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { ArrowLeft, FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center bg-background text-foreground">
      <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
        <FileQuestion className="size-8" />
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight">404</h1>
      <p className="mt-2 text-lg font-semibold text-foreground/90">
        Page Not Found
      </p>
      <p className="mt-1 text-sm text-muted-foreground max-w-sm">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-6">
        <Button asChild size="sm" className="gap-2">
          <Link href="/">
            <ArrowLeft className="size-4" />
            <span>Return to Portfolio</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
