import React, { useEffect, useRef, useState } from "react";
import "./LogoAnimation.css";

const LogoAnimation = () => {
  const svgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Start animation when 50% visible
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center mb-8">
      <div className="relative w-16 h-8" ref={svgRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 134 106"
          className={`animated-logo ${isVisible ? "animate" : ""}`}
        >
          <g fill="none" fillRule="nonzero" stroke="#f3f4f6" strokeWidth="2">
            <path d="M39.35 1.395L1.596 104.605H38.65L76.404 1.395H39.35zM95.47 1.813L57.714 105.022H94.77l37.754-103.21H95.47z" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default LogoAnimation;
