import { useState, useEffect } from 'react'
import axios from 'axios'

const About = () => {
  const [aboutData, setAboutData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await axios.get('http://localhost:5000/about')
        setAboutData(response.data)
      } catch (error) {
        console.error('Error fetching about data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAbout()
  }, [])

  if (loading) {
    return (
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 ease-in-out"
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 font-body text-gray-600 dark:text-gray-400">
              Loading...
            </p>
          </div>
        </div>
      </section>
    )
  }

  if (!aboutData) {
    return null
  }

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 ease-in-out"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center md:justify-start" data-aos="fade-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full transform rotate-6 opacity-30"></div>
              <img
                src={aboutData.photo}
                alt={aboutData.name}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-secondary shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left" data-aos="fade-left">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-primary">
              Tentang Nyaku
            </h2>
            <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
              {aboutData.name}
            </h3>
            <p className="font-body text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto md:mx-0 text-center md:text-left">
              {aboutData.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

