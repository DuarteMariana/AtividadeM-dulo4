import React from "react";
import { Link } from "react-router-dom";


export default function Menu() {
    return (

<header style={{textAling:"center"}}>
    <nav id="menu-h" >
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Promo">Promoções</Link></li>
        <li><Link to="/Viagem">Viagens</Link></li>
        <li><Link to="/Contato">Contato</Link></li>
    
        </ul>
        </nav>

</header>
        
    );
}