"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Next.js UI Components
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A modern component library built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-12">
          {/* Welcome Section */}
          <section className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl">Welcome to the Component Showcase</CardTitle>
                <CardDescription className="text-lg">
                  Explore our collection of accessible, responsive UI components
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 dark:text-gray-300">
                  This application demonstrates a comprehensive UI component library featuring:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Badge variant="secondary">Accessibility First</Badge>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Built with Radix UI primitives for maximum accessibility
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="secondary">Responsive Design</Badge>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Mobile-first approach with Tailwind CSS
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="secondary">Type Safe</Badge>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Full TypeScript support for better development experience
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="secondary">Modern Stack</Badge>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Next.js 15 with Turbopack for fast development
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg">Get Started</Button>
                  <Button variant="outline" size="lg">View Components</Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Component Preview Section */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Component Preview
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Buttons Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Buttons</CardTitle>
                  <CardDescription>Various button styles and sizes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Button className="w-full">Primary Button</Button>
                    <Button variant="secondary" className="w-full">Secondary</Button>
                    <Button variant="outline" className="w-full">Outline</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Badges Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Badges</CardTitle>
                  <CardDescription>Status indicators and labels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Features Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Features</CardTitle>
                  <CardDescription>What's included in this library</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      40+ UI Components
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Dark/Light Mode
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Form Validation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Data Visualization
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            © 2024 Next.js UI Components. Ready for development.
          </p>
        </footer>
      </div>
    </div>
  )
}
