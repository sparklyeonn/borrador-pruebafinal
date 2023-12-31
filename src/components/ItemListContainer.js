import React, { useEffect, useState} from 'react'
import ItemList from './ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import Spinner from "./Spinner";


function ItemListContainer (){
    const [itemContent, setItemContent] = useState([]);
    const [loader, setLoader]= useState(false);
    const { catId } = useParams();

//Arreglar getFirestore
useEffect(()=> {
      setLoader (true);
     const db= getFireStore();
     const itemCollection = db.collection("items");
     const filteredItems = catId ? itemCollection.where('category','==',catId) : itemCollection
     filteredItems.get().then((querySnapshot)=>{
        if (querySnapshot.size === 0){
         console.log("no result");
        }
       setItemContent(querySnapshot.docs.map(doc=> {return {"id": doc.id, ...doc.data()}}));
     }).finally(()=>{
       setLoader(false)
     })
    },[catId]);
    


return(
 
   <div className="container-itemList">
     <div className="container-home">
       <h1>Tienda online</h1>
       <div className="container-item-list">
         {loader && <Spinner/>}
         <ItemList>{itemContent}</ItemList>
       </div>
     </div>
     </div>
   
)
}

export default ItemListContainer;