import { AiFillStar } from "react-icons/ai";

const FoodCard = ({ food }) => {
  const { id, name, img, price, desc, category, rating } = food;
  // const shortDesc =
  //   desc.split(" ").slice(0, 10).join(" ") +
  //   (desc.split(" ").length > 10 ? "..." : "");
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm py-2 flex justify-between ">
        <h2>{name}</h2>
        <span className=" text-green-500">${price}</span>
      </div>
      <p className="font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between ">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button className="p-1  bg-green hover:text-white hover:bg-green-600 rounded-lg text-sm">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;