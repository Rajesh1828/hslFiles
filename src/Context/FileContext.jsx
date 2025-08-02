// FileContext.jsx
import { createContext, useState, useContext, useEffect } from "react";
import { collection } from "../assets/assets";
import { toast } from "react-toast";

export const FileContext = createContext(null);

export const StoreContextFileProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const currency = "₹"

  {/* Function to add an item to the cart */ }
  const addToCart = (itemId,size) => {
    let cartData  = structuredClone(cartItems)
    if(!size){
      toast.error("Please select a size")
      return
    }
    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] +=1
        
      }else{
        cartData[itemId][size]=1
      }
    }else{
      cartData[itemId]={}
      cartData[itemId][size]=1
    }
    setCartItems(cartData)
   
  };

  // upadteQuantiyy

  const updateQuantity = async(itemId,size,quantity)=>{
    let cartData = structuredClone(cartItems)
    cartData[itemId][size] = quantity
    setCartItems(cartData)
  }


  const getCartCount =()=>{
    let totalCount = 0
    for(const items in cartItems){
      for(const size in cartItems[items]){
         try {
           if(cartItems[items][size]>0){
             totalCount += cartItems[items][size]
           }
         } catch (error) {
          
         }
      }
    }
    return totalCount
  
  }

  {/* Function to remove an item from the cart */ }
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };



  {/* Provide the context value */ }
  const contextValue = {
    collection,
    cartItems,
    addToCart,
    removeFromCart,
    currency,
    getCartCount,
    updateQuantity
  };

  return (
    <FileContext.Provider value={contextValue}>
      {children}
    </FileContext.Provider>
  );
};
