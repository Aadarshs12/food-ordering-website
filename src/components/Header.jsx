import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart} from "lucide-react";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems= useSelector((store)=> store.cart.items);
  const [buttonValue, setButtonValue] = useState("Login");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-20 bg-teal-600 m-0.5 shadow-2xl rounded-lg w-full">
      <div className="h-full items-center flex justify-between   ">
        <div className="h-[74px] mx-2 w-auto flex-shrink-0 ">
          <img
            className="rounded-full shadow-2xl h-full w-auto"
            src={LOGO_URL}
            alt="nav-logo"
          />
        </div>
        <div className="menu_container flex items-center ">
          <button className="sm:hidden absolute right-[100px] text-white" onClick={()=> setIsOpen(true)}>
            <Menu />
          </button>
        </div>
        
        <div className="flex">
        <div className="hidden sm:block">
        <ul className="text-white  flex ">
                    <li className="px-2.5 hover:underline"><Link to="/" className="link">Home</Link></li>
                    <li className="px-2.5 hover:underline"><Link to="/about" className="link">About Us</Link></li>
                    <li className="px-2.5 hover:underline"><Link to="/contact" className="link">Contact Us</Link></li>
                    <li className="px-2.5 hover:underline"><Link to="/grocery" className="link">Grocery</Link></li>
                    <li className="px-2.5 hover:underline"><Link to="/cart" className="link px-3 hover:underline relative bottom-3 right-0.5 text-sm font-semibold">{cartItems.length}<ShoppingCart className="absolute top-[14px] right-1.5 "/></Link></li>
                </ul> 
        </div>
        <div>
          <button
            className="font-semibold  bg-green-500 hover:bg-green-400 text-center  rounded-md p4-2 w-20 ml-1 mr-4 text-yellow-100"
            onClick={() => {
              buttonValue === "Login"
                ? setButtonValue("Logout")
                : setButtonValue("Login");
            }}
          >
            {buttonValue}
            
          </button>
     
        </div>
        </div>
      </div>
      <div className="z-20 md:hidden bg-white">
      <div className={` ${isOpen? "block" : "hidden"}`}>
        <div className="flex justify-end " onClick={()=> setIsOpen(false)}>
        <X/>
        </div>
        <div className="h-screen w-screen  text-black  flex">
        <ul className="font-bold underline text-2xl">
                    <li className="px-2.5 hover:underline"><Link to="/" className="link">Home</Link></li>
                    <li className="px-2.5 hover:underline"><Link to="/about" className="link">About Us</Link></li>
                    <li className="px-2.5 hover:underline"><Link to="/contact" className="link">Contact Us</Link></li>
                    <li className="px-2.5 hover:underline"><Link to="/grocery" className="link">Grocery</Link></li>
                    <li className="px-2.5 hover:underline">Cart</li>
        </ul> 
        </div>
      </div>
      </div>
    </div>
    
  );
};
export default Header;
