import DUMMY_MEALS from "../../../data/meals.json";
import classes from "./MealsAvailable.module.css";
import Card from "../../../components/ui/card/Card";
import MealsItem from "../meals-item/MealsItem";

export default function MealsAvailable(props) {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal, index) => {
            return <MealsItem key={meal.id} meal={meal} />;
          })}
        </ul>
      </Card>
    </section>
  );
}
