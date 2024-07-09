// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Manrope } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { NextUIProvider } from '@nextui-org/react'

const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >

        <NextUIProvider>
          <body
            className={cn(
              'antialiased',
              fontHeading.variable,
              fontBody.variable
            )}
          >
            {children}
          </body>
        </NextUIProvider>
      </ThemeProvider>
    </html>
  )
}