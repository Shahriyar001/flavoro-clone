import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import toast, { Toaster } from "react-hot-toast";

const FoodItem = () => {
  const [foodItems, setFoodItems] = useState([]);
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
        {foodItems?.map((food, index) => {
          return (
            <FoodCard
              key={index}
              food={food}
              handleToast={handleToast}
            ></FoodCard>
          );
        })}
      </div>
    </>
  );
};

export default FoodItem;
