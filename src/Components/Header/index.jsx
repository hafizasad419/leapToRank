import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import rabbit from "./rabbit.svg";

const navLinks = [
  { name: "SERVICES", path: "/services" },
  { name: "ABOUT", path: "/about" },
  { name: "BLOG", path: "/blog" },
  { name: "CONTACT", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
<>
    <header>
      <nav className="bg-c-blue text-white fixed top-0 z-90 w-full">
        <div className="px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={rabbit} alt="Leap Works" className="h-16 w-16 mr-3" />
            <span className="text-4xl font-extrabold hidden lg:block">LEAP TO RANK</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex ml-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `mr-28 text-xl font-bold uppercase smooth-hover-underline ${isActive ? "nav-underline" : ""}`
                }

              >
                {link.name}
              </NavLink>
            ))}
          </div>


          {/* Mobile Menu Button */}
          <div className="lg:hidden z-100">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
              {isMenuOpen ? <X size={42} /> :


                <div
                  className="flex space-x-4 items-center"
                >
                  <p className="text-xl">MENU</p>
                  <Menu size={42} />
                </div>
              }
            </button>
          </div>
        </div>
         

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-c-blue flex flex-col justify-center items-center z-50 lg:hidden">
            {/* Logo */}
            <img src={rabbit} alt="Leap Works" className="h-16 mb-6" />

            {/* Menu Items */}
            <div className="flex flex-col space-y-4 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white text-lg font-semibold hover:text-gray-200 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      
    </header>


</>


  );
};

export default Header;
