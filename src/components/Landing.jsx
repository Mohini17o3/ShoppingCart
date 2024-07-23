import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Product from "./Product";

function Landing() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [sidebar, setShowSidebar] = useState(false);
  const [orderSummary, setOrderSummary] = useState([]);
  const [Tprice, setTPrice] = useState(0);

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

  function handleClick() {
    setShowSidebar(!sidebar);
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        console.log(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar cart={cart.length} sidebar={sidebar} handleClick={handleClick} />
      </div>
      <div className="p-4 flex flex-col gap-4 relative mt-16 ">
        {product.map((product) => {
          return (
            <Product
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              onAddToCart={() => {
                handleAddToCart(product);
              }}
            />
          );
        })}
      </div>
      {sidebar && (
        <div className="fixed top-20 right-0 h-[calc(100vh-4rem)] w-1/3 bg-gray-400 py-2 px-2.5 shadow-lg z-50 overflow-y-auto">
          <h2 className="text-xl font-bold bg-gray-500 rounded-md border-b border-gray-600 mb-4">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="flex items-center justify-between mb-4 hover:bg-gray-500 p-2 cursor-pointer">
                <img src={item.image} alt={item.title} className="h-16 w-16 object-cover" />
                <div className="ml-4">
                  <p>{item.title}</p>
                  <p>Rs.{item.price}</p>
                </div>
              </div>
            ))
          )}
          {cart.length > 0 && (
            <button
              className="bg-black text-white p-2 rounded-md hover:bg-white hover:text-black transition"
              onClick={handleOrderSummary}
            >
              Checkout
            </button>
          )}
          {orderSummary.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
              {orderSummary.map((item, index) => (
                <div key={index} className="flex items-center justify-between mb-2">
                  <p>{item.title}</p>
                  <p>Rs.{item.price}</p>
                </div>
              ))}
              <div className="border-t border-gray-600 pt-2">
                <p className="text-lg font-bold">Total: Rs.{Tprice}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Landing;
