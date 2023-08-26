import MealsSummary from "./meals-summary/MealsSummary";
import MealsAvailable from "./meals-available/MealsAvailable";

export default function Meals(props) {
  return (
    <>
      <MealsSummary />
      <MealsAvailable />
    </>
  );
}
