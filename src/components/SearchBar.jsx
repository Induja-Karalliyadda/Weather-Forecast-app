import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function SearchBar() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <input className="form-control" type="search" placeholder="Address,City" aria-label="Search" />
                </div>
                <div className="col-auto">
                    <button className="btn btn-dark" type="submit">Search</button>
                </div>
            </div>
            <br />
            {/* ------------------------------------------ */}
            <div className="container">
            <nav className="navbar navbar-expand-lg custom-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                </div>
            </nav>
        </div>
        </div>
    );
}