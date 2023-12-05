import React, { useEffect, useState } from "react"
import "./App.css"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"

function App() {
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode"))
  }
  const [dark, setMode] = useState(getMode())
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))
  }, [dark])
  return (
    <>
      <div className={dark ? "app" : "light"}>
        <Header dark={dark} setMode={setMode} />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App
