import { useContext } from "react";
import classes from "./MealsItem.module.css";
import MealItemForm from "../meals-item-form/MealItemForm";
import { CartContext } from "../../../store/context/CartContext";

export default function MealsItem({ meal }) {
  const cartCtx = useContext(CartContext);

  function addToCart(amount) {
    cartCtx.addItem({ ...meal, amount: amount });
  }

  function formatPrice(price) {
    return `${price.toFixed(2)}`;
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{formatPrice(meal.price)}</div>
        <div></div>
      </div>
      <MealItemForm id={meal.id} addToCart={addToCart} />
    </li>
  );
}
