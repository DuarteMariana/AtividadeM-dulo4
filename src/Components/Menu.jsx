import React from "react";
import { Link } from "react-router-dom";


export default function Menu() {
    return (
      <>
      <nav className="navbar navbar-expand-md navbar-light" style={{background:"#131E61"}}>
      <div className="container">
        <Link className="navbar-brand" to="/" style={{fontStyle:"oblique", fontSize:"bold", color:"white"}}>
          Agência World
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white ">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Promo" className="nav-link text-white">
                Promoções
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/Viagem" className="nav-link text-white">
                Viagem
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contato" className="nav-link text-white">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
       
       </> 


        
    );
}