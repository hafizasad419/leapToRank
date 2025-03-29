const Heading = ({ text, className = "" }) => {
    return <h2 className={`text-2xl md:text-3xl font-bold text-c-orange my-6 ${className}`}>{text}</h2>
  }
  
  export default Heading
  
  