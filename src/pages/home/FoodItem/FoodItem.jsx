import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const FoodItem = () => {
  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    fetch("../../../../public/FoodItems.json")
      // fetch("FoodItems.json")
      .then((response) => response.json())
      .then((data) => setFoodItems(data));
  }, []);

  return (
    <div className="ml-5 my-10 flex flex-wrap gap-10 justify-center lg:justify-start">
      {foodItems?.map((food, index) => {
        return <FoodCard key={index} food={food}></FoodCard>;
      })}
    </div>
  );
};

export default FoodItem;
