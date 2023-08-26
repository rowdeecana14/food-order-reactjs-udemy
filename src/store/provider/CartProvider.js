import { useReducer } from "react";
import { CartContext } from "../context/CartContext";
import { cartReducer, defaults, actions } from "../reducer/CartReducer";

export default function CartProvider(props) {

  const [cart, dispatch] = useReducer(cartReducer, defaults);
  const context = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  function addItemToCart(item) {
    dispatch({ type: actions.ADD_ITEM, data: { item: item } });
  }

  function removeItemFromCart(id) {
    dispatch({ type: actions.REMOVE_ITEM, data: { id: id } });
  }

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}
