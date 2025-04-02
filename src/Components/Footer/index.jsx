import { useState } from "react";
import { Link } from "react-router-dom";
import { Twitter, Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import LogoAnimation from "./LogoAnimation";

const Footer = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: ""
  });

  const [newsletterData, setNewsletterData] = useState({
    firstName: "",
    email: ""
  });

  const handleContactChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleNewsletterChange = (e) => {
    setNewsletterData({ ...newsletterData, [e.target.name]: e.target.value });
  };

  // Error and success message handling
  const renderMessage = (status, type) => {
    if (status?.succeeded) {
      return (
        <div className="success-message">
          {type === 'contact' ? "Your message has been sent!" : "You've successfully subscribed!"}
        </div>
      );
    } else if (status?.failed) {
      return (
        <div className="error-message">
          {type === 'contact' ? "There was an error sending your message." : "Failed to subscribe. Please try again."}
        </div>
      );
    }
    return null;
  };

  return (
    <footer className="bg-c-gray text-white py-16">
      <div className="">

        {/* Contact Form Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center px-4">We can help. Let's chat.</h2>
          <form action="https://formspree.io/f/meoalbbg" method="POST" className="px-4 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={contactData.name}
                onChange={handleContactChange}
                className="bg-c-gray ring-gray-600 ring-1 p-3 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={contactData.email}
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
                value={contactData.company}
                onChange={handleContactChange}
                className="bg-c-gray ring-gray-600 ring-1 p-3 rounded"
              />
              <input
                type="text"
                name="role"
                placeholder="Role at company (optional)"
                value={contactData.role}
                onChange={handleContactChange}
                className="bg-c-gray ring-gray-600 ring-1 p-3 rounded"
              />
            </div>
            <textarea
              name="message"
              placeholder="Tell us about your goals and how we can help you reach them."
              value={contactData.message}
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
          <form action="https://formspree.io/f/xnnpbejw" method="POST" className="max-w-md mx-auto">
            <div className="grid grid-cols-1 gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name (optional)"
                value={newsletterData.firstName}
                onChange={handleNewsletterChange}
                className="bg-c-gray ring-gray-600 ring-1 p-3 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={newsletterData.email}
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
          <h2 className="text-3xl font-bold mb-6 text-center">Get in touch.</h2>
          <div className="flex justify-center mt-16 space-x-3 lg:space-x-6">
            <a href="mailto:leaptorank@gmail.com?subject=We%20are%20interested%20in%20your%20services&body=Hello,%0A%0AI%20am%20reaching%20out%20to%20inquire%20about%20your%20services.%20Please%20let%20me%20know%20how%20we%20can%20collaborate.%0A%0AThank%20you!"
              target="_blank" rel="noopener noreferrer" className="bg-gray-600 w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full hover:bg-c-blue transition-all">
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        {/* Logo Animation */}
        <LogoAnimation />

        {/* Copyright and Links */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} LEAP TO RANK LLC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
