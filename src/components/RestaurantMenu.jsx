import { LIST_IMG_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import Shimmer2 from "./Shimmer2";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  if (!resMenu) {
    return <Shimmer2 />;
  }
  console.log("resMenu",resMenu);
  const {
    name,
    cuisines,
    avgRating,
    sla,
    costForTwoMessage,
    cloudinaryImageId,
  } = resMenu?.cards?.[2]?.card?.card?.info;
  // const { itemCards } =
  //   resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const catogories= resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log("catogories", catogories);
  return (
    <div className="w-auto my-4 content-center">
      <div className="bg-yellow-500 border-black border-double border  rounded-md">
        <div className="flex justify-center items-center  ">
          <div className="w-32 shrink-0 mx-10">
            <img
              className=" rounded-lg "
              src={LIST_IMG_URL + cloudinaryImageId}
              alt="resImg"
            />
          </div>
          <div className="text-black justify-center mr-10">
            <h1 className=" text-red-700 font-bold text-xl ">{name}</h1>
            <h3 className="text-blue-600 mb-1 ">{cuisines.join(", ")}</h3>
            <div>
              <h4 className="bg-pink-500 w-12 text-center shadow-gray-50 rounded-md px-1 ">
                {avgRating}⭐
              </h4>
              <h4 className="text-xs">{sla?.slaString}🛵</h4>
              <h4 className="text-sm">{costForTwoMessage}</h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        {
            catogories.map((category)=>
                <RestaurantCategories key={category.card.card.title}  data={category?.card?.card}/>
            )
        }
      </div>
      
    </div>
  );
};

export default RestaurantMenu;
