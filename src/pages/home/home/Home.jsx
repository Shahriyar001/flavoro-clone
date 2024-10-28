import Cart from "../../../components/Cart";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import FoodItem from "../FoodItem/FoodItem";

const Home = () => {
  return (
    <div>
      <CategoryMenu />
      <FoodItem />
      <Cart />
    </div>
  );
};

export default Home;
