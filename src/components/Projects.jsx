import { useState, useEffect } from 'react'
import axios from 'axios'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/projects')
        setProjects(response.data)
      } catch (error) {
        console.error('Error fetching projects data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <section
        id="projects"
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

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 ease-in-out"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <h2
          className="font-heading text-5xl md:text-6xl font-bold text-center mb-10 md:mb-16 text-primary"
          data-aos="fade-up"
        >
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id || index}
              className="bg-white dark:bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out border-2 border-transparent hover:border-secondary"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="font-body text-gray-700 dark:text-gray-300 mb-4 max-w-2xl">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary hover:bg-secondary text-white font-body font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-transparent border-2 border-primary hover:border-secondary text-primary hover:text-secondary dark:text-secondary dark:border-secondary font-body font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

