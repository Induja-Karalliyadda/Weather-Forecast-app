import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import CarouselPage from './CarouselPage'
import { Navbar } from 'react-bootstrap'
import SearchBar from './components/SearchBar'
import axios from 'axios'




function App() {
  const [count, setCount] = useState(0)

  const handleSearchClick = () => {
    let searchval = document.getElementById("searchTxt").value
    alert(searchval);
    let repo = {
      methord: 'Get'
    };
    // axios used method
    // axios.get(`http://api.weatherapi.com/v1/current.json?key=3de1dd892afb4f2eb6e31653242502&q=${searchval}`)
    // .then(res=>{console.log(res.data)})

    fetch(`http://api.weatherapi.com/v1/current.json?key=3de1dd892afb4f2eb6e31653242502&q=${searchval}`, repo)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Update state or perform other actions with the fetched data
      })
      .catch(error => console.log("error", error));
  };

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
        {/* searchbar */}
        <div className="container">
          <div className="row">
            <div className="col">
              <input className="form-control" id="searchTxt" type="search" placeholder="Address,City" aria-label="Search" />
            </div>
            <div className="col-auto">
              <button className="btn btn-dark" id="searchBtn" onClick={handleSearchClick} type="submit">Search</button>
            </div>
          </div>
          <br />
          <br />
        </div>
        {/* end-searchBar */}
      </div>
      {/* Current Weathe */}
      <div className='container'>
        <nav class=" navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
          <div class="container-fluid">
            <div class="mx-auto d-flex justify-content-center">
              {/* <a class="navbar-brand" href="#">Current Weathe</a> */}
            </div>
            <div class="collapse navbar-collapse justify-content-center" id="navbarsExample08">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"><p class="h5">Current Weathe</p></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/*  */}
      <div className='container'>
        <img src="//cdn.weatherapi.com/weather/64x64/day/176.png" alt="" srcset="" />
        <h1 id="temp">Temp</h1>
        <h2>Cloudy</h2>
        <h3>country</h3>
      </div>
    </>
  );
}

export default App;
