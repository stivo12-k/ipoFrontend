import { useState, useEffect } from 'react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Web Developer'
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    let timeout
    if (!isDeleting && displayText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setTypingSpeed(150)
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? fullText.substring(0, displayText.length - 1)
            : fullText.substring(0, displayText.length + 1)
        )
        setTypingSpeed(isDeleting ? 75 : 150)
      }, typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, typingSpeed, fullText])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-black transition-colors duration-500 ease-in-out"
      data-aos="fade-up"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="text-center md:text-left" data-aos="zoom-in">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
              Hi, I'm Stivo{' '}
              <span className="inline-block animate-bounce">👋</span>
            </h1>
            <p className="font-body text-xl md:text-2xl mb-4 text-gray-700 dark:text-gray-300">
              I'm a{' '}
              <span className="text-primary font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </p>
            <p className="font-body text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-400 max-w-2xl">
              who loves building fun and functional interfaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-primary hover:bg-secondary text-white font-body font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                View My Projects
              </button>
              <button
                onClick={() => {
                  // Simulate download
                  const link = document.createElement('a')
                  link.href = '#'
                  link.download = 'Stivo_Kaunang_Resume.pdf'
                  link.click()
                }}
                className="px-8 py-4 bg-transparent border-2 border-primary hover:border-secondary text-primary hover:text-secondary dark:text-secondary dark:border-secondary dark:hover:border-accent font-body font-semibold rounded-2xl transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex justify-center md:justify-end" data-aos="zoom-in">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-2xl border-2 border-primary/20 dark:border-secondary/20">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="#ff6b6b"
                    opacity="0.2"
                  />
                  <circle cx="100" cy="80" r="20" fill="#ff4747" />
                  <path
                    d="M 60 140 Q 100 120 140 140"
                    stroke="#ff4747"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <rect
                    x="70"
                    y="160"
                    width="60"
                    height="20"
                    rx="5"
                    fill="#ff6b6b"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

