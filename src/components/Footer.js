import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom"
export default function Footer() {


    return (
        <div className="footer-container">
        <div className="footer-container2">
        <Link to="/register">
        <button>Suscribete</button>
        </Link>
        <h1>vila en las redes</h1>
        <div className= "footer-container-icons">
        <i className="fab fa-facebook-f footer-icon"></i>
        <i className="fab fa-twitter footer-icon"></i>
        <i className="fab fa-instagram footer-icon"></i>
        </div>
        </div>
        <h4>Créditos: <span>Constanza Gonzalez</span></h4>
        </div>
    )
  }
  