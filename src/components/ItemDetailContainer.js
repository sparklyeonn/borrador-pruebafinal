import React, { } from 'react'
import { useEffect, useState } from "react";
import './ItemListContainer.css';
import ItemDetail from './ItemDetail';
import ItemDetailInfo from './ItemDetailInfo'
import './ItemDetailContainer.css'
import { useParams } from 'react-router';
import Spinner from "./Spinner";
import {Link} from 'react-router-dom'

function ItemDetailContainer(){
  const [itemDetail, setItemDetail] = useState([]);
  const [loader, setLoader]= useState(false);
  const [error, setError]=useState()
  const { pId } = useParams();
  
//Arreglar esta parte del codigo
  useEffect(()=>{
    setLoader (true);
  const itemCollection = db.collection("items");
  const productid = pId;
  const item = itemCollection.doc(productid);
//
  
    item.get().then((doc) =>{
     if (!doc.exists){
     console.log("no existe el item");
     setError(true)
     return;
     }
    setItemDetail([{id: doc.id, ...doc.data()}]);
     }).catch((error) =>{
       console.log("error", error);
     }).finally(()=>{
       setLoader(false)
     })
     
   },[pId]);
   
   
return(
  <div className="container-itemDetails">
  <div className="container-spinner">
  {loader && <Spinner/>}
  </div>
  
  {error === true && 
  <>
  <div className="container-error">
  <h1>No existe el item</h1>
  <Link to="/">
  <button className="btn btn-inicio">Volver al inicio</button>
  </Link>
  </div>
  </>
  }
 
  <div>
   {itemDetail?.map(it=>{
    return(
      <>
      <ItemDetail
      title={it.title}
       img={it.img}
      price={it.price}
       desc={it.desc}
       id= {it.id}
       stock={it.stock}>
     </ItemDetail>
           <div className="item-detail-info-container">
           <ItemDetailInfo desc={it.desc} id={it.id}   ></ItemDetailInfo>
          </div>
          </>
    )
   })}
   </div>
   
   </div>
  
)
}

export default ItemDetailContainer;
