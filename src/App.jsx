import { BrowserRouter, Routes, Route } from "react-router-dom"
import ShipsListContainer from "./components/ShipsListContainer/ShipsListContainer"
import NavBar from "./components/NavBar/NavBar"
import ShipDetailContainer from "./components/ShipDetailContainer/ShipDetailContainer"
import { ShipProvider } from "./context/shipContext"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <ShipProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ShipsListContainer />} />
            <Route path="/ship/:id" element={<ShipDetailContainer />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShipProvider>
    </>
  )
}

export default App
