import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch= useDispatch();
  const handleClear = ()=>{
    dispatch(clearCart());
  }
  return (
    <div>
      <div >
      <div className="text-center font-bold underline underline- text-2xl text-red-500">
        Cart Details
      </div>
      <button className="font-bold mt-4 text-center flex justify- px-2 py-1 m-auto text-white bg-black rounded-lg" onClick={handleClear}>
        Clear Cart
        </button>
      </div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <ItemList items={cartItems} />
        {cartItems.length === 0 && (
          <h1 className="text-center font-semibold">
            Nothing in the Cart List; please add some items to see the cart!!!
          </h1>
        )}
      </div>
    </div>
  );
};
export default Cart;
