// FileContext.jsx
import { createContext, useState, useContext } from "react";
import { collection } from "../assets/assets";

export const FileContext = createContext(null);

export const StoreContextFileProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const currency = "₹"

  {/* Function to add an item to the cart */ }
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

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
    currency
  };

  return (
    <FileContext.Provider value={contextValue}>
      {children}
    </FileContext.Provider>
  );
};
