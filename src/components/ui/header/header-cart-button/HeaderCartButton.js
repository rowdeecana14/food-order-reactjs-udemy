import { useContext, useEffect, useState } from "react";
import CartIcon from "../../../../features/cart/cart-icon/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { CartContext } from "../../../../store/context/CartContext";

export default function HeaderCartButton(props) {

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${ btnIsHighlighted ? classes.bump : ''}`;
  const { items } = cartCtx;

  useEffect(() => {
    if(items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <>
      <button className={btnClasses} onClick={props.showCart}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{totalCartItems}</span>
      </button>
    </>
  );
}
