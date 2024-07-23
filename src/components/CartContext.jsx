//since cart state is required for sidebar , ordersummary , price calculation add context for clarity 

import React from "react";
import { createContext , useState } from "react";

export const cartContext  = createContext();


function CartProvider ({children}) {
 
    const [cart, setCart] = useState([]);
    const [sidebar, setShowSidebar] = useState(false);
    const [orderSummary, setOrderSummary] = useState([]);
    const [Tprice, setTPrice] = useState(0);


    // setting up order summary 
    function handleOrderSummary() {
        let price = 0;
        const summary = cart.map((item) => {
          price += item.price;
          return item;
        });
    
        setOrderSummary(summary);
        setTPrice(price);
        setCart([]);
      }


      
 // toggle sidebar for cart contents

  function handleClick() {
    setShowSidebar(!sidebar);
  }

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };



  return (
    <cartContext.Provider
    value = {{
        cart , sidebar , orderSummary , Tprice, handleAddToCart , handleClick , handleOrderSummary , 
    }}
     >
         {children}
      </cartContext.Provider>
  )


}




export default CartProvider ;