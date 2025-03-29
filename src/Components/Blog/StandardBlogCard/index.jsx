const StandardBlogCard = ({ category, title, description, date, image }) => {
    return (
      <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
        <div className="h-48">
          <img
            src={image || "/placeholder.svg?height=200&width=300"}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="uppercase text-xs font-semibold text-gray-700 mb-2">{category}</div>
          <h3 className="text-lg font-bold text-c-orange mb-2">{title}</h3>
          <p className="text-gray-700 mb-4 text-sm flex-grow">{description}</p>
          <div className="text-xs text-gray-500 mt-auto">{date}</div>
        </div>
      </div>
    )
  }
  
  export default StandardBlogCard
  
  