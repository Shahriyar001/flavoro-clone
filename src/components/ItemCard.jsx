import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ItemCard = () => {
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2">
      <img
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt=""
        className="w-[50px] h-[50px]"
      />
      <div className="">
        <h2 className="font-bold text-gray-700">Onion Pizza</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">$ 120</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlinePlus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:border-none rounded-md p-1 text-xl transition-all ease' cursor-pointer" />
            <span>1</span>
            <AiOutlineMinus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:border-none rounded-md p-1 text-xl transition-all ease' cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
