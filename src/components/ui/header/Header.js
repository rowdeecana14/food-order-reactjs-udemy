import HeaderCartButton from "./header-cart-button/HeaderCartButton";
import classes from "./Header.module.css";
import mealsImage from "../../../assets/meals.jpg";

export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton showCart={props.showCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
}
