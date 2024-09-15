import { LIST_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="w-full mt-2">
      {items.map((item) => (
        <div className="border-gray-200 border-b-2" key={item.card.info.id}>
          {" "}
          <div className="font-bold">
            {item.card.info.name}/- ₹
            {item.card.info.defaultPrice
              ? item.card.info.defaultPrice / 100
              : item.card.info.price / 100}
          </div>
          <div className="text-balance sm:flex wifull sm:justify-between mx-4 p-4">
            <p className="font-light sm:w-9/12">{item.card.info.description}</p>
            <div className="sm:w-3\12">
              <button
                className="bg-orange-700 m-auto text-sm font-semibold text-white rounded-md absolute p-0.5"
                onClick={() => handleClick(item)}
              >
                Add+
              </button>
              <img
                className="w-20 h-20 rounded-md"
                src={LIST_IMG_URL + item.card.info.imageId}
                alt="not-availabe image"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
