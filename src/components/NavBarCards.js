import React from 'react';
import { Link} from 'react-router-dom';
import './NavbarCards.css';
import AcordionNavBar from './AcordionNavBar'
import CartwidgetWishList from './CartWidgetWishList'

const NavBarCards = () => {
return (
<div className="NavBarCards-container">
  <Link to="/cartwishlist">
<div className="navbarCards-wishList ">
     <i className="far fa-heart"></i> 
     <CartwidgetWishList/>
     <div className="linea-carrito"><p>Lista de deseos</p></div>
     
</div>
</Link>
<div className="navBarCards-btn">
      <Link to="/">
        <button className=" btn categoria">Todos</button>
      </Link>
      <Link to="/category/Vinilos">
        <button className=" btn categoria">Vinilos</button>
      </Link>
      <Link to="/category/CD">
        <button className=" btn categoria">CD</button>
      </Link>
      <Link to="/category/Cassettes">
        <button className=" btn categoria">Cassettes</button>
      </Link>

</div>

<div className="navbarCards-icons">
    
       <AcordionNavBar></AcordionNavBar>
      
      </div>

</div>
)
};

export default NavBarCards;