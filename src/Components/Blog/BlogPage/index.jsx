import { useEffect, useState } from "react";

const BlogPage = ({
  category,
  title,
  authorName = "Mark Plutynski",
  authorImage = "",
  children,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      // Get the footer height dynamically
      const footer = document.querySelector("footer");
      const footerHeight = footer ? footer.offsetHeight : 0;

      // Adjust calculation to exclude footer height
      const scrollableHeight = docHeight - winHeight - footerHeight;
      const progress = (scrollTop / scrollableHeight) * 100;

      setScrollProgress(Math.min(progress, 100)); // Ensure it doesn't exceed 100%
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-6 py-8 relative">
      {/* Blog Header */}
      <div className="mb-8">
        <div className="text-c-orange font-medium mb-4 uppercase">{category}</div>
        <h1 className="text-4xl lg:text-5xl font-bold text-c-orange mb-4">{title}</h1>

        {/* Author Info */}
        <div className="flex items-center">
          <img
            src={authorImage || "/placeholder.svg"}
            alt={authorName}
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="text-gray-700 font-medium">{authorName}</span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="blog-content">{children}</div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-[5px] bg-gray-200">
        <div
          className="h-full bg-c-orange transition-all"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default BlogPage;
