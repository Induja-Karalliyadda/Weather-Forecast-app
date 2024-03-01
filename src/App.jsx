import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import CarouselPage from './CarouselPage'
import { Navbar } from 'react-bootstrap'
import SearchBar from './components/SearchBar'





 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-navbar ">
          <div className="container-fluid">
          <a className="navbar-brand bw-bold" href="#">Weather forecast</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
            <a className="nav-link active " aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Current Weather</a>
            <a className="nav-link" href="#">Forecast</a>
            <a className="nav-link" href="#">News</a>
            <a className="nav-link" href="#">Map</a>
            <a className="nav-link disabled" aria-disabled="true">Subscribe</a>
                </div>
              </div>
          </div>
        </nav>
  
   
      <CarouselPage></CarouselPage>
      <Navbar></Navbar>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br> 
      <SearchBar></SearchBar>
      </div> 
      
    </> 
  )
}

export default App
