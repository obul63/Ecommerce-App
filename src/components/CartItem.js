import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";

import  {CartContext} from '../contexts/CartContext'


const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext)

  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500 ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title & remove icon */}
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* remove icon */}
            <div onClick={() => removeFromCart(id)} className="text-xl cursor-pointer ">
              <IoMdClose className="text-slate-700 hover:bg-red-400 hover:rounded-full transition " />
            </div>
          </div>
          <div className=" flex gap-x-3 h-[36px] text-sm ">
            {/* qty */}
            <div className="flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium">
              {/* minus icon */}
              <div onClick={() => decreaseAmount(id)} className="flex-1 flex justify-center items-center cursor-pointer h-full hover:bg-red-400 transition-all" >
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              {/* plus icons */}
              <div onClick={() => increaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer hover:bg-slate-600 hover:text-red-500 transition-all">
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="flex-1 flex items-center justify-around">$ {price}</div>
            {/* final price */}
            <div className="flex-1 flex justify-end items-center text-primary font-medium">
              {`$ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
