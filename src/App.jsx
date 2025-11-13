import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500 ease-in-out">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
