import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import CarouselPage from './CarouselPage'

 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <div className='container'>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
          <a className="navbar-brand" href="#">Weather forecast</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
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
      {/* ------------------------- */}
      <br />
      <CarouselPage></CarouselPage>
      {/* ----------------------- */}
      </div> 
    </>
  )
}

export default App
