import React, { Component } from 'react'
import './NavbarHome.css';
import {Link} from "react-router-dom"

import logo from '../components/img/Logo.png';

class NavbarHome extends Component {
  state = { clicked: false}
  handleClick = () => {
    this.setState ({ clicked: !this.state.clicked})
  }
  render() {
    return (
      <nav className="NavbarItems">
      <div>

         <div className="menu-icon" onClick={this.handleClick}>
           <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
         <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
           <Link to="/">
           <button>Home</button>
           </Link>
           <Link to="/cart">
           <button>Carrito</button>
           </Link>
           <Link to="/cartwishlist">
           <button>Lista de deseos</button>
           </Link>
           <Link to="/register">
           <button>Newsletter</button>
           </Link>
         </ul>
         <p>menu</p>
      </div>
      <div className="logo-container">
       <Link to="/">
        <div >
          <img src={logo} alt=""/>
        </div>
        </Link>
      </div>
      <Link to="/register">
        <div className="nav-suscribe">
        <i className="far fa-edit"></i>
        <h3>Suscribete</h3>
        </div>
        </Link>
        

      </nav>

    )
  }
}

export default NavbarHome;