import Header from "./components/ui/header/Header";
import Meals from "./features/meals/Meals";
import Cart from "./features/cart/Cart";
import { useState } from "react";
import CartProvider from "./store/provider/CartProvider";

export default function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  function hideCart() {
    setCartIsVisible(false);
  }

  function showCart() {
    setCartIsVisible(true);
  }

  return (
    <CartProvider>
      {cartIsVisible && <Cart hideCart={hideCart}/>}
      <Header showCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
