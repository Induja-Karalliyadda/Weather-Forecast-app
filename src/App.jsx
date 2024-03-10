import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import CarouselPage from './CarouselPage'
import { Navbar } from 'react-bootstrap'
import SearchBar from './components/SearchBar'
import axios from 'axios'
import DateTime from './DateTime'




function App() {
  const [count, setCount,] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };



  // start time

  // end time

  const handleSearchClick = () => {
    let searchval = document.getElementById("searchTxt").value
    let repo = {
      methord: 'Get'
    };
    // axios used method
    // axios.get(`http://api.weatherapi.com/v1/current.json?key=3de1dd892afb4f2eb6e31653242502&q=${searchval}`)
    // .then(res=>{console.log(res.data)})

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=3de1dd892afb4f2eb6e31653242502&q=${searchval}&days=7`, repo)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.getElementById("temp").innerHTML = data.current.temp_c;
        document.getElementById("textSample").innerHTML = data.current.condition.text;
        document.getElementById("country").innerHTML = data.location.country;
        document.getElementById("img").src = data.current.condition.icon;
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
                {/* dark mode */} 
                <div className="form-check form-switch m-0 ">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked={isDarkMode} onChange={toggleDarkMode} />
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
                </div>
                {/* end dark mode */}
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
      <br />
      <DateTime />
      <div className='container'>
        <img id="img" src="" alt="" srcset="" />
        <h1 id="temp">Temp</h1>
        <h2 id="textSample">Cloudy</h2>
        <h3 id="country">country</h3>
      </div>
      <div>
        {/* ================================ */}
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
                    <a class="nav-link active" aria-current="page" href="#"><p class="h5">Forcast</p></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* =============================== */}

        <br />
        {/* ================================ */}
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
                    <a class="nav-link active" aria-current="page" href="#"><p class="h5">News</p></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* ================news card============== */}
        <div className="b-example-divider"></div>
        <div className="container px-4 py-5" id="custom-cards">
          <h2 className="pb-2 border-bottom">World Top News</h2>
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col">
              <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-1.jpg')" }}>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                      <small>Earth</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
                      <small>3d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-2.jpg')" }}>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h3>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                      <small>Pakistan</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
                      <small>4d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-3.jpg')" }}>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                      <small>California</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
                      <small>5d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ================================ */}
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
                    <a class="nav-link active" aria-current="page" href="#"><p class="h5">Map</p></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* =============foter part================== */}
        <div class="container">
          <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
              <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap" /></svg>
              </a>
              <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2024 Induja Karalliyadda</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter" /></svg></a></li>
              <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram" /></svg></a></li>
              <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook" /></svg></a></li>
            </ul>
          </footer>
        </div>
      </div>
      {/* ===================================== */}
    </>
  );
}

export default App;
