// import { Mail, Github, Linkedin } from 'lucide-react'
// import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 inline-block text-transparent bg-clip-text">Gayatri Devarshetty</h3>
            
          </div>
          
          
          <div className="space-y-4">
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110"
              >
               GitHub 
                {/* <Github className="h-6 w-6" /> */}
              </a>

              <a
                href="http://linkedin.com/in/devarasettygayathri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110"
              >
                LinkedIn
                {/* <Linkedin className="h-6 w-6" /> */}
              </a>

              <a
                href="mailto:devarasettygayathri99@gmail.com"
                className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110"
              >
                Email
                {/* <Mail className="h-6 w-6" /> */}
              </a>
            </div>
          </div>
        </div>
        
        {/* <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  )
}
