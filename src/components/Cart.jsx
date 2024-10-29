import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(true);
  const cartItems = useSelector((state) => state.cart.cart);
  console.log("cartItems", cartItems);
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full md:w-[60vw] lg:w-[20vw] bg-white h-full p-5 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-700">My Order</span>

          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>

        {cartItems.map((food) => {
          return <ItemCard key={food.id} food={food} />;
        })}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items: </h3>
          <h3 className="font-semibold text-gray-800">Total Amount: </h3>
          <hr className="w-[90vw] lg:w-[280px] my-2" />
          <button className="bg-green-500 font-bold px-3 text-white py-2 rounded md:w-[420px] lg:w-[280px] w-[90vw] my-2">
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className="rounded-full bg-white text-gray-800 shadow-md text-5xl p-3 fixed bottom-10 right-4 hover:scale-150"
      />
      {/* <FaShoppingCart
        className="rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-10 right-4 transform transition-transform hover:scale-150"
        style={{
          animation: "blip 1s infinite",
          transformOrigin: "center",
        }}
      /> */}
    </>
  );
};

export default Cart;
