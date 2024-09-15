import { useState, useEffect } from "react";
const useRestaurantList = () => {
  const [listOfRestaurants, setListofRestaurants] = useState([]);

  useEffect(() => {
    fetchData().catch((error) => {
      console.log(error);
    });
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListofRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return listOfRestaurants;
};
export default useRestaurantList;
