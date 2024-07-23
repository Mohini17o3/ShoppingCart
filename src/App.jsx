import Landing from "./components/Landing"
import './App.css'
import CartProvider from "./components/CartContext"
function App() {

  return (
    <>
    <CartProvider>
     <Landing />
     </CartProvider>
    </>
  )
}

export default App
