function Product (props) {


function handleClick() {
  
    props.onAddToCart();

}

    return (
       <div className="grid rounded-lg rows-4 m-2 p-2 max-h-xs bg-gray-800 border-4 hover:cursor-pointer">  
          <div className="row-span-2 flex justify-center items-center ">
          <img className=" h-80 w-80 shadow-lg rounded-md flex m-4 p-2 border-2 hover:translate-y-1 transition ease-in-out delay-150 hover:scale-110" src={props.image}></img>
          </div>
          <div>
            <h1 className="text-lg font-semibold mb-2 ">{props.title}</h1>
          </div>
          <p className="text-blue-400 font-semibold mb-4">Rs.{props.price}
          {props.price}
          </p>
          <div>
            <button
             className="bg-black text-white p-4 rounded-md m-2 hover:bg-white hover:text-black transition"
             onClick={handleClick}
             >Add to Cart</button>
          </div>
          </div>   
    );
}

export default Product ;
