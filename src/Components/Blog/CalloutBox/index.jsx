const CalloutBox = ({ children, className = "" }) => {
    return <div className={`bg-gray-100 border-l-4 border-c-orange p-4 my-6 rounded-r-lg ${className}`}>{children}</div>
  }
  
  export default CalloutBox
  
  