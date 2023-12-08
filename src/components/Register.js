import React, {useState} from 'react';
import { useForm } from 'react-hook-form'
import './Register.css';

export default function Register(){
    const [user, setUser] = useState([]);
    
    const { register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data, e) => {
      JSON.stringify(data);
      e.target.reset();
    
    };
      
    return(
        <>
        
        { user.length === 0 ?
        
            <div className="container-register">
                <h1>Suscribete a nuestro Newsletter y obtén promociones unicas ! </h1>
         <div className="App">
      <form className="container-formulario " onSubmit={handleSubmit(onSubmit)}>
        <div className="form-item" >
          <label >Nombre</label>
          <input type="name" {...register("nombre", { required: "Debes ingresar tu nombre", maxLength: 20, minLength: 2 })} />
          {errors.nombre && (<p style={{ color: "red" }}>{errors.nombre.message}</p>)}
        </div>

        <div className="form-item">
          <label htmlFor="lastName">Apellido</label>
          <input type="name" {...register("apellido",{ required: "Debes ingresar tu apellido", maxLength: 20, minLength: 2 })} />
          {errors.apellido && (<p style={{ color: "red" }}>{errors.apellido.message}</p>)}
        </div>

        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", { required: "Debes ingresar tu email" })}
          />
          {errors.email && (<p style={{ color: "red" }}>{errors.email.message}</p>)}
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
      </div>
    :
    <>
    <h1>Muchas gracias por registrarte!</h1>
    <p>Te enviaremos por mail todas las promociones que tenemos</p>
    </>
     }
      </>
    )
}