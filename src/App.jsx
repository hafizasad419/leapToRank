import AppRoutes from "./AppRoutes"
import Header from "./Components/Header/"
import Footer from "./Components/Footer/index.jsx"
import { BrowserRouter } from "react-router-dom"

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
