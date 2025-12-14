import Navbar from './Navbar'
import Home from './Home'
import Portfolio from './portfolio'
import AboutUs from './aboutus'
import Gallery from './gallery'
import Footer from './Footer'
import { useState } from 'react'
import Login from './Login'

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <main>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
        <Home />
        <AboutUs />
        <Portfolio />
        <Gallery />
        <Footer />
      </main>
    </>
  )
}

export default App
