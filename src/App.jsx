import AppRoutes from "./AppRoutes"
import Header from "./Components/Header/index.jsx"
import Footer from "./Components/Footer/index.jsx"
import { BrowserRouter } from "react-router-dom"

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <div
        className="mt-20"
        >
        <AppRoutes />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
