const BlogImage = ({ src, alt = "", caption = "", className = "" }) => {
    return (
      <figure className={`my-6 ${className}`}>
        <img src={src || "/placeholder.svg"} alt={alt} className="w-full rounded-lg shadow-sm" />
        {caption && <figcaption className="text-sm text-gray-700 mt-2 text-center italic">{caption}</figcaption>}
      </figure>
    )
  }
  
  export default BlogImage
  
  