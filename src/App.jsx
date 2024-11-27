
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
    </>
  )
}

export default App
