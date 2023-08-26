import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../../components/form/Input";

export default function MealItemForm(props) {
  const [isValidAmount, setIsValidAmount] = useState(true);
  const amountInputRef = useRef();

  function submitItem(event) {
    event.preventDefault();

    const amount = amountInputRef.current.value;
    const amountNumber = +amount;

    if (amount.trim().length === 0 || amount < 1 || amount > 6) {
      setIsValidAmount(false);
      return;
    }

    setIsValidAmount(true);
    props.addToCart(amountNumber);
  }

  return (
    <form className={classes.form} onSubmit={submitItem}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValidAmount && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
}
