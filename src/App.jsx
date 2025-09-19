import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Slider from './components/Slider'
import Products from './components/Products'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Login from './pages/Login'
import Register from './pages/Register'
import PageNotFound from "./components/PageNotFound"

function App() {
  <h1> </h1>

  

  return (
    <>
      <Router>
        <div className="container-fluid">
          <div className="row my-2">
            <div className="col-12">
              <Header />
            </div>
          </div>

          <Routes>
            <Route path="/" element={
              <>
                <div className="row my-2">
                  <div className="col-12">
                    <Slider />
                  </div>
                </div>

                <div className="container my-2 gap-5">
                  <div className="row mb-2">
                    <div className="col-sm-6 col-md-4 col-lg-3 ">
                      <Products
                        imgSrc="/imgs/c1.webp"
                        title="Web Development"
                        text="Responsive, modern, and scalable websites tailored to your business"
                        btntext="Explore" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 ">
                      <Products
                        imgSrc="/imgs/c2.jpeg"
                        title="Mobile App Development"
                        text="Android & iOS apps with seamless user experience"
                        btntext="Explore" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 ">
                      <Products
                        imgSrc="/imgs/c3.jpg"
                        title="Cloud Solutions"
                        text="Secure, scalable, and cost-effective cloud services"
                        btntext="Explore" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 ">
                      <Products
                        imgSrc="/imgs/c4.png"
                        title="AI & Data Consulting"
                        text="Harness the power of AI to drive smarter decisions"
                        btntext="Explore" />
                    </div>
                  </div>
                </div>
              </>
            }>
            </Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Services' element={<Services />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/Register' element={<Register />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
            
             
          </Routes>

          <div className="container-fluid">
            <div className="row ">
              <div className="col-12">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
