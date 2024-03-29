import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './SearchBar'


export default function SearchBar() {
   

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <input className="form-control" id="searchTxt" type="search" placeholder="Address,City" aria-label="Search" />
                </div>
                <div className="col-auto">
                    <button className="btn btn-dark" id="searchBtn"  type="submit">Search</button>
                </div>
            </div>
            <br />
            <br />
            {/* ------------------------------------------ */}
            

        </div>
    );
}