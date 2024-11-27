import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import About from './components/About'
import { BrowserRouter } from 'react-router-dom'
import FeaturePage from './components/FeaturePage'
import FAQPage from './components/FAQPage'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="relative z-10 bg-slate-900">
          <div
            style={{
              backgroundImage: `url('/full-bg.png')`,
            }}
            className=" bg-cover bg-no-repeat bg-center">
            <Navbar />
            <LandingPage />
          </div>
          <About />
          <FeaturePage />
          <FAQPage /> 
          <Footer />
        </div>
      </BrowserRouter>
     {/* <div className='bg-slate-900 p-3'>
       <Navbar />
       <LandingPage />
     </div> */}
    </>
  )
}

export default App
