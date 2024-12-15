import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Service1 from './pages/Service1' // The Service1 component
import Service2 from './pages/Service2' // The Service2 component
import Service3 from './pages/Service3' // The Service3 component
import Service4 from './pages/Service4' // The Service4 component
import Service5 from './pages/Service5'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service1" element={<Service1 />} />
            <Route path="/service2" element={<Service2 />} />
            <Route path="/service3" element={<Service3 />} />
            <Route path="/service4" element={<Service4 />} />
            <Route path="/service5" element={<Service5 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
