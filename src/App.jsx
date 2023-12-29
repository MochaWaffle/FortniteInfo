import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Map from "./pages/Map"
import News from "./pages/News"
import Shop from "./pages/Shop"
import CreatorCode from "./pages/CreatorCode"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/map" element={<Map/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/shop" element={<Shop/>} />
          <Route path="/creatorcode" element={<CreatorCode/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App