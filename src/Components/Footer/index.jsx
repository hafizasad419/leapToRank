import { useState } from "react"
import { Link } from "react-router-dom"
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react"
import LogoAnimation from "./LogoAnimation"


const Footer = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  })

  const [newsletterForm, setNewsletterForm] = useState({
    firstName: "",
    email: "",
  })

  const handleContactChange = (e) => {
    const { name, value } = e.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleNewsletterChange = (e) => {
    const { name, value } = e.target
    setNewsletterForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Contact form submitted:", contactForm)
    // Reset form
    setContactForm({
      name: "",
      email: "",
      company: "",
      role: "",
      message: "",
    })
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription logic here
    console.log("Newsletter form submitted:", newsletterForm)
    // Reset form
    setNewsletterForm({
      firstName: "",
      email: "",
    })
  }

  return (
    <footer className="bg-c-gray text-white py-16">
      <div className="">
        {/* Contact Form Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center px-4">We can help. Let's chat.</h2>
          <form onSubmit={handleContactSubmit} className="px-4 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={contactForm.name}
                onChange={handleContactChange}
                className="bg-c-gray ring-gray-600 ring-1 p-3 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={contactForm.email}
                onChange={handleContactChange}
                className="bg-c-gray ring-gray-600 ring-1 p-3 rounded"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={contactForm.company}
                onChange={handleContactChange}
                className="bg-c-gray ring-gray-600 ring-1 p-3 rounded"
              />
              <input
                type="text"
                name="role"
                placeholder="Role at company (optional)"
                value={contactForm.role}
                onChange={handleContactChange}
                className="bg-c-gray ring-gray-600 ring-1 p-3 rounded"
              />
            </div>
            <textarea
              name="message"
              placeholder="Tell us about your goals and how we can help you reach them."
              value={contactForm.message}
              onChange={handleContactChange}
              className="bg-c-gray ring-gray-600 ring-1 p-3 rounded w-full mb-4 h-32"
              required
            ></textarea>
            <div className="text-center">
              <button type="submit" className="btn-outline-gray">
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b-2 border-b-gray-700 px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Sign up.</h2>
          <p className="text-lg text-center text-gray-400 mb-6 max-w-xl mx-auto">
            Get expert brand, marketing, and technology tips and news delivered straight to your inbox. We won't spam
            you or share your email address with affiliates.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="grid grid-cols-1 gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name (optional)"
                value={newsletterForm.firstName}
                onChange={handleNewsletterChange}
                className="bg-c-gray ring-gray-600 ring-1 p-3 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={newsletterForm.email}
                onChange={handleNewsletterChange}
                className="bg-c-gray ring-gray-600 ring-1 p-3 rounded"
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn-outline-gray">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Social Media Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Social media.</h2>
          <div className="flex justify-center mt-16 space-x-3 lg:space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full hover:bg-c-blue transition-all"
            >
              <Twitter className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full hover:bg-c-blue transition-all"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full hover:bg-c-blue transition-all"
            >
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full hover:bg-c-blue transition-all"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>

        </div>

        {/* Logo Animation */}
        <LogoAnimation />

        {/* Copyright and Links */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} LEAP TO RANK LLC</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:text-gray-400">
              Privacy policy
            </Link>
            <Link href="/site-map" className="hover:text-gray-400">
              Site map
            </Link>
            <Link href="/client-portal" className="hover:text-gray-400">
              Client portal
            </Link>
          </div>
          <p className="mt-4">Made with  ❤️  in California</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

