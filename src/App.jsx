import AppRoutes from "./AppRoutes"
import Header from "./Components/Header/index.jsx"
import Footer from "./Components/Footer/index.jsx"
import { BrowserRouter } from "react-router-dom"

function App() {

  if (typeof window !== 'undefined') {
    document.documentElement.classList.remove('dark'); // Remove dark mode if it was accidentally set
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <h1 className="bg-white text-center mt-20 py-8 lg:hidden text-3xl text-c-blue font-extrabold">LEAP TO RANK</h1>
        <div
          className="lg:mt-20"
        >
          <AppRoutes />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
