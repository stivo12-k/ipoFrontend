import { useState } from 'react'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! (Check console for details)')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <footer
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-black transition-colors duration-500 ease-in-out"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Contact Form */}
          <div data-aos="fade-in-up">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-primary">
              Get In Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-body text-sm font-semibold mb-2 text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-body focus:border-primary dark:focus:border-secondary focus:outline-none transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-body text-sm font-semibold mb-2 text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-body focus:border-primary dark:focus:border-secondary focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-body text-sm font-semibold mb-2 text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-body focus:border-primary dark:focus:border-secondary focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary hover:bg-secondary text-white font-body font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="flex flex-col justify-center items-center md:items-start" data-aos="fade-in-up">
            <h3 className="font-heading text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Let's Connect
            </h3>
            <p className="font-body text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
              Feel free to reach out if you want to collaborate or just say hi!
            </p>
            <div className="flex space-x-6 mb-12">
              <a
                href="https://github.com/jordan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary dark:hover:bg-secondary transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6 text-gray-900 dark:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/jordan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary dark:hover:bg-secondary transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6 text-gray-900 dark:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:jordan@example.com"
                className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary dark:hover:bg-secondary transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <svg
                  className="w-6 h-6 text-gray-900 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
            <div className="text-center md:text-left">
              <p className="font-body text-sm text-gray-600 dark:text-gray-400">
                © 2025 Stivo Kaunang. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

