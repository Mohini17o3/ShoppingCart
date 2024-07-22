import React, { useEffect, useState } from "react";
import Navbar from "./Navbar"
import Product from "./Product";



function Landing(){

    const [product , setProduct] = useState([]);
    const [cart , setCart] = useState([]);
    const [openSnackBar , setOpenSnackBar] = useState(false);
    const [snackMessage , setSnackMessage] = useState(" ");

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> {
          setProduct(json);
          console.log(json)
        })
        .catch(error => {console.log(error)});
    
    } , []);

  const handleAddToCard = (product)=>{
    setCart([...cart , product]);
    setOpenSnackBar(true);
    setSnackMessage(cart.length);
  }

    return (
        <>


        <Navbar 
        cart = {cart.length}
        add = {openSnackBar}
         />

        <div className="p-4 flex flex-col gap-4">

      {  product.map((product)=>{
        return (  <Product
        key = {product.id}
        title = {product.title}
        price = {product.price}
        image = {product.image}
        onAddToCart = {()=>{handleAddToCard(product)}}
         />);
      

        })}
        </div>
        

</>
    );

}

export default Landing ;