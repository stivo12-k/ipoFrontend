import { useState, useEffect } from 'react'
import axios from 'axios'

const Skills = () => {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('http://localhost:5000/skills')
        setSkills(response.data)
      } catch (error) {
        console.error('Error fetching skills data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  if (loading) {
    return (
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-black transition-colors duration-500 ease-in-out"
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

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-black transition-colors duration-500 ease-in-out"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <h2
          className="font-heading text-5xl md:text-6xl font-bold text-center mb-10 md:mb-16 text-primary"
          data-aos="zoom-in-up"
        >
          Teknologi yang Saya Gunakan
        </h2>
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10"
          data-aos="zoom-in-up"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out border-2 border-transparent hover:border-secondary cursor-pointer"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col items-center justify-center space-y-4">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
                <h3 className="font-body text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

