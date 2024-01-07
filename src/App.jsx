import React, { Suspense } from 'react'
import { Route, Routes } from "react-router-dom"


import Navbar from "./components/Navbar"
const Home = React.lazy(() => import("./pages/Home"))
const Map = React.lazy(() => import("./pages/Map"))
const News = React.lazy(() => import("./pages/News"))
const Shop = React.lazy(() => import("./pages/Shop"))
const CreatorCode = React.lazy(() => import("./pages/CreatorCode"))


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Suspense fallback={
          <div className="parentHomeContainer">
            <div className="homeContainer">
              <p className="homeBodyText">Loading...</p>
            </div>
          </div>
        }>
          <Routes>
            <Route path="./" element={<Home />} />
            <Route path="./home" element={<Home />} />
            <Route path="./creatorcode" element={<CreatorCode />} />
            <Route path="./map" element={<Map />} />
            <Route path="./news" element={<News />} />
            <Route path="./shop" element={<Shop />} />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}

export default App