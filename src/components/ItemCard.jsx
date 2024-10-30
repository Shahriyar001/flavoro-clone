import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeToCart, increment, decrement } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const ItemCard = ({ food }) => {
  const { id, name, img, price, qty } = food;
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        onClick={() => {
          dispatch(removeToCart({ id, name, img, price, qty }));
          toast(`${name} Removed!`, {
            icon: "👋",
          });
        }}
        className="absolute right-7 text-gray-600 cursor-pointer text-xl"
      />
      <img src={img} alt="" className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-700">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">$ {price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrement({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-gray-500 hover:border-none rounded-md p-1 text-xl transition-all ease' cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(increment({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-gray-500 hover:border-none rounded-md p-1 text-xl transition-all ease' cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
