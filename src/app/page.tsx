import Hero from "@/components/Home"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import About from "@/components/About"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Certifications from "@/components/Certifications"

export default function Home() {
  return (
    <main className="bg-gradient-text text-foreground">
      <section id="home" >
        <Hero />
      </section>
      
      <section id="about" >
        <About />
      </section>

      <section id="education" >
        <Education />
      </section>

      <section id="certifications" >
        <Certifications />
      </section>
      
      <section id="projects" >
        <Projects />
      </section>
      
      <section id="skills" >
        <Skills />
      </section>

      <section id="experience" >
        <Experience />
      </section>
      
      <section id="contact" >
        <Contact />
      </section>
    </main>
  )
}