import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";

const Cart = () => {
  return (
    <>
      <div className="fixed right-0 top-0 w-full md:w-[60vw] lg:w-[20vw] bg-white h-full p-5">
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-700">My Order</span>

          <IoMdClose className="border-2 border-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer" />
        </div>

        <ItemCard />

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items: </h3>
          <h3 className="font-semibold text-gray-800">Total Amount: </h3>
          <hr className="w-[90vw] lg:w-[280px] my-2" />
          <button className="bg-green-500 font-bold px-3 text-white py-2 rounded md:w-[420px] lg:w-[280px] w-[90vw] my-2">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
