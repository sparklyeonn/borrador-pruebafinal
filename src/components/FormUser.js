import React, {useState} from 'react';
import { getFireStore} from '../firebase/firebase';
import { useCart} from '../context/CartContext';
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form'
import './FormUser.css'

const FormUser = (itemProduct) => {
   const [orderId, setOrderId] = useState([]);

    //Datos del carrito//
    const cartInfo = useCart();
    const totalPriceItems= ()=>{
        return cartInfo.totalPrice() 
       }
    const removerItem = ()=>{
      return cartInfo.clear
    }

     //Datos del formulario//
     const {
        register,
        formState: { errors },
        getValues,
        handleSubmit
      } = useForm();
     const onSubmit = (data, e) => {
         e.target.reset()
         e.preventDefault()
         const buyer = data

        }
     
    return (
        <>
        {orderId.length === 0 ?
        <div className="container-formulario">
            <h1>Formulario</h1>
            <h3>Completa el formulario para finalizar tu compra</h3>
            <form onSubmit={handleSubmit(onSubmit)} >
            <div className="col-md-3">
                  <div className="form-item">
                    <label htmlFor="nombre">Tu nombre</label>
                     <input type="name" {...register("nombre", { required: "Debes ingresar tu nombre", maxLength: 20, minLength: 2 })} />
                     {errors.nombre && (<p style={{ color: "red" }}>{errors.nombre.message}</p>)}
                  </div>
                  <div className="form-item">
                    <label htmlFor="nombre">Tu apellido</label>
                     <input type="name" {...register("apellido", { required: "Debes ingresar tu apellido", maxLength: 20, minLength: 2 })} />
                     {errors.apellido && (<p style={{ color: "red" }}>{errors.apellido.message}</p>)}
                  </div>
                 <div className="form-item">
                   <label>Tu Mail: </label>
                    <input type="email" {...register("email", { required: "Debes ingresar tu email" })}/>
                    {errors.email && (<p style={{ color: "red" }}>{errors.email.message}</p>)}
                 </div>
                 <div className="form-item">
                    <label>Confirma tu email</label>
                    <input {...register("emailConfirmation", {
                      required: "Por favor confirma tu email!",
                      validate: { matchesPreviousPassword: (value) => {
                     const { email } = getValues();
                     return email === value || "Los emails deben coincidir";}}})}/>
                 
                {errors.emailConfirmation && (<p style={{ color: "red" }}>{errors.emailConfirmation.message}</p>)}
                </div>
                    <button type="submit"  className="btn btn-important">Enviar</button>
                </div>
            </form>
            </div> 

            
            :
            
            <div className="container-confCompra">
            <h2>Muchas gracias por tu compra,</h2>
            <p>
              Tu numero de orden es: <span> {orderId} </span>. Recirás un email cuando tu pedido esté listo para ser retirado. 
            </p>
            <Link to="/">
            <button className="btn btn-important" onClick={removerItem()}>Volver al inicio</button>
            </Link>
            </div>
            
        
      }
                
        </>
    );
}
 
export default FormUser;
