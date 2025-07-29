
import { createContext, useState } from "react";
// import { StoreContext } from "../../../../reactjs/frontend/src/context/StoreContext";
import { collection } from "../assets/assets";

 export const FileContext = createContext(null);


 const StoreContextFileProvider =(props)=>{

  const[cartItems,setCartItems] = useState({});


  const addToCart =(itemId)=>{
    if(!cartItems[itemId]){
      setCartItems(prev =>({...prev,[itemId]:1}))
    }else{
      setCartItems(prev=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }

  const removeFromCart = (itemId)=>{
    
      setCartItems(prev=>({...prev,[itemId]:prev[itemId]-1}))
    
  }

  console.log(cartItems)
    const contextValue ={
      collection,
      cartItems,
      addToCart,
      removeFromCart
    }
  return(
    <FileContext.Provider value={contextValue}>
        {props.children}
    </FileContext.Provider>
  )
 }
 
 
 export default StoreContextFileProvider