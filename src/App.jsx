import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'
import { Routes, Route } from 'react-router-dom'
function App() {


  return (
    <>
     <div className="bg-black bg-cover h-vh  bg-no-repeat">
    
        <Navigation/>
        <Projects/>
        <About/>
        <Contact/>
      
      </div>
    </>
  )
}

export default App
