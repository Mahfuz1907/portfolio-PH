import type { Metadata } from "next"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "MD. Mahfuzul Alam | Frontend Web Developer (RUET ECE - Rajshahi)",
  description:
    "Personal portfolio of MD. Mahfuzul Alam, Frontend Web Developer from Rajshahi University of Engineering & Technology (RUET), based in Rajshahi. Specializing in React, Next.js, TypeScript, and modern UI engineering.",
  keywords: [
    "MD. Mahfuzul Alam",
    "Mahfuzul Alam",
    "RUET",
    "Rajshahi",
    "Frontend Web Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: "MD. Mahfuzul Alam" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased font-sans">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
