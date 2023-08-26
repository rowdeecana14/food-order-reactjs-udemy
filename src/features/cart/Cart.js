import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../../components/ui/modal/Modal";
import CartItem from "./CartItem/CartItem";
import { CartContext } from "../../store/context/CartContext";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  function addItem(item) {
    cartCtx.addItem({ ...item, amount: 1 });
  }

  function removeItem(id) {
    cartCtx.removeItem(id);
  }

  return (
    <Modal hideCart={props.hideCart}>
      <ul className={classes["cart-items"]}>
        {cartCtx.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={item}
              removeItem={removeItem.bind(null, item.id)}
              addItem={addItem.bind(null, item)}
            />
          );
        })}
      </ul>
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>{totalAmount}</div>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.hideCart}>
          Close
        </button>
        {hasItems && <button className={classes["button"]}>Order</button>}
      </div>
    </Modal>
  );
}
