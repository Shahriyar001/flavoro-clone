import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItem = () => {
  const [foodItems, setFoodItems] = useState([]);

  const category = useSelector((state) => state.category.category);

  useEffect(() => {
    fetch("../../../../public/FoodItems.json")
      // fetch("FoodItems.json")
      .then((response) => response.json())
      .then((data) => setFoodItems(data));
  }, []);

  const handleToast = (name) => {
    toast.success(`Added ${name}`);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="ml-5 my-10 flex flex-wrap gap-10 justify-center lg:justify-start">
        {foodItems
          .filter((food) => {
            if (category === "All") {
              return food;
            } else {
              return category === food.category;
            }
          })
          .map((food, index) => (
            <FoodCard
              key={index}
              food={food}
              handleToast={handleToast}
            ></FoodCard>
          ))}
        {/* {foodItems?.map((food, index) => {
          return (
            <FoodCard
              key={index}
              food={food}
              handleToast={handleToast}
            ></FoodCard>
          );
        })} */}
      </div>
    </>
  );
};

export default FoodItem;
