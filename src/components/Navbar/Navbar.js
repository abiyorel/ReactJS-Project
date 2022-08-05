import React from 'react'
import { NavLink, Link } from "react-router-dom";
import "../../App.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light mb-4 fixed-top">
        <div className="container">
        <Link to="/" className="fs-3 ubuntu navbar-brand text-secondary">Rick and Morty <span className="text-info">ReactJS</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <style jsx>
            {`
            button[aria-expanded="false"] > .close{
                display: none;
            }
            button[aria-expanded="true"] > .open{
                display: none;
            }
            `}
        </style>
        <i class="fas fa-bars text-info open fw-bold"></i>
        <i class="fas fa-times text-info close fw-bold"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav fs-5">
        <NavLink activeClassName="active" to="/" className="nav-link text-info">Characters</NavLink>
        <NavLink to="/episodes" className="nav-link text-info">Episodes</NavLink>
        <NavLink to="/location" className="nav-link text-info">Locations</NavLink>
        </div>
        </div>
        </div>
        </nav>
    );
};

export default Navbar;