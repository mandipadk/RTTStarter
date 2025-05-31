import { ArrowRight, Github, Zap, Sparkles, Layers, Code } from 'lucide-react'

export default function Landing() {
  const features = [
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Lightning Fast",
      description: "Built with Vite for instant hot module replacement and blazing fast development experience.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Modern Stack",
      description: "React 18, TypeScript, and Tailwind CSS v4 with the latest features and best practices.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: "Well Structured",
      description: "Clean architecture with organized components, layouts, and routing ready for any project.",
      gradient: "from-emerald-500 to-teal-500"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold tracking-tight">RTT Starter</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                Contact
              </a>
              <a href="/login" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                Sign in
              </a>
              <a 
                href="https://github.com/mandipadk/RTTStarter" 
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            React + TypeScript + Tailwind
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Modern React
            <span className="block bg-gradient-to-r from-primary via-primary to-accent-foreground bg-clip-text text-transparent">
              Starter Kit
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            A thoughtfully crafted foundation for building exceptional web applications. 
            Clean, fast, and ready for production.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            
            <button className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-all duration-200">
              View on GitHub
            </button>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {['Vite 5', 'React 18', 'TypeScript', 'Tailwind v4', 'React Router', 'ESLint'].map((tech) => (
              <span
                key={tech}
                className="bg-muted text-muted-foreground px-3 py-1 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for developers who care about quality
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every detail has been considered to give you the best possible development experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Less complexity. More productivity.
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            We believe great software starts with great foundations. This starter kit removes the setup friction 
            so you can focus on what matters most—building amazing user experiences.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-lg font-semibold mb-3">Modern by Default</h3>
              <p className="text-muted-foreground">
                Latest versions of React, TypeScript, and Tailwind CSS with optimized configurations 
                that follow current best practices.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Production Ready</h3>
              <p className="text-muted-foreground">
                Includes routing, layouts, error boundaries, and build optimizations. 
                Deploy with confidence from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <Code className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="font-semibold">RTT Starter</span>
            </div>
            
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Built with care for the developer community.<br />
              Make something extraordinary.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}