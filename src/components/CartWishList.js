import React from 'react';
import { useCart} from '../context/CartContext';
import CartWishListContent from './CartWishListContent'
import './CartWishList.css';


export default function CartWishList(){
    const wishList = useCart()
    const wishListItems = wishList.wishList.items
    
    
    const clearProducts = () => {
        wishList.clearWishList()
    }

    return (
        <div className="container-wishList">
        <h2>Lista de deseos</h2>

        {wishListItems.length === 0? (<h1>No hay productos agregados</h1>): (
        <div className="container-itemsWL">
        {wishListItems?.map((i)=>{
            return (
                <>
                <div key= {i.item.id} className="container-item-detail">
                <img src= {i.item.img} alt="imagen item"></img>
                <div className="info-item-details" >
                <h1> {i.item.title} </h1>
                <p> {i.item.desc} </p>
                <p className="price-detail"> <span>$</span> {i.item.price} </p>

                 <CartWishListContent
                pId= {i.item.id} />
                </div>

                </div>
                </>
            )
        })

        }

        
        <button className="btn btn-vaciar" onClick={clearProducts}>Vaciar Lista de Deseos</button>
        </div>
        )}
        </div>
    )
}