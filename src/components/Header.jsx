import { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const Header = () => {
  const { isDark, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => scrollToSection('hero')}
            className="cursor-pointer font-heading text-2xl font-bold text-primary hover:text-secondary transition-colors duration-300"
          >
            Stivo Kaunang
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="font-body text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="font-body text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="font-body text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-body text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors duration-300"
            >
              Contact
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-500 ease-in-out transform hover:rotate-180"
              aria-label="Toggle theme"
            >
              <span className="text-2xl">
                {isDark ? '☀️' : '🌙'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-500 ease-in-out transform hover:rotate-180"
              aria-label="Toggle theme"
            >
              <span className="text-xl">
                {isDark ? '☀️' : '🌙'}
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

