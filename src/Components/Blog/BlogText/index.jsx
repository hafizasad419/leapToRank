const BlogText = ({ opening, content, className = "" }) => {
  return <p className={`text-gray-700 leading-relaxed my-4 ${opening ? "text-xl lg:text-2xl" : "text-base"} ${className}`}>{content}</p>
}

export default BlogText

