import React from "react";
import Logo from "./assets/Logo.jpg";
import cart from "./assets/Cart.svg";
import user from "./assets/user.png";
import search from "./assets/search.svg";
const Header = () => {
  return (
    <>
      <div className="w-full h-screen bg-black">
        <div className="h-20 bg-white flex items-center justify-around">
          <div className="text-2xl text-gray-800 font-extrabold  ">
            Ecommerce
          </div>
          <div>
            <ul className="flex text-gray-600 font-medium items-center space-x-4">
              <li className="underline underline-offset-4">Home</li>
              <li>product</li>
              <li>Service</li>
              <li>About us</li>
            </ul>
          </div>
          <div className=" flex justify-start w-[20%] items-center px-2 gap-2 rounded-2xl h-fit border bg-gray-200">
            <input
              className=" text-gray-950 h-full  px-1 w-full  text-sm   bg-gray-200 focus:outline-none "
              type="search"
              placeholder="what do you need?"
            />
            <button className=" h-fit  ">
              <img src={search} alt="" />
            </button>
          </div>
          <div>
            <div className="flex space-x-4">
              <button className="w-8">
                <img className="w-full" src={cart} alt="" />
              </button>

              <button className="w-8 ">
                <img src={user} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
