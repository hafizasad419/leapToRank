const FeaturedBlogCard = ({ category, title, description, date, image }) => {
    return (
      <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mb-8">
        <div className="md:w-1/2">
          <img
            src={image || "/placeholder.svg?height=300&width=400"}
            alt={title}
            className="w-full h-full"
          />
        </div>
        <div className="md:w-1/2 p-6">
          <div className="uppercase text-xs font-semibold text-gray-700 mb-2">{category}</div>
          <h2 className="text-2xl font-bold text-c-orange mb-3">{title}</h2>
          <p className="text-gray-700 mb-4 text-sm">{description}</p>
          <div className="text-base text-gray-500">{date}</div>
        </div>
      </div>
    )
  }
  
  export default FeaturedBlogCard
  
  