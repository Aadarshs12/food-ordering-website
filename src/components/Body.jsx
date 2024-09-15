import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{
    const [listOfRestaurants, setListofRestaurants]=useState([]);
    const [filterListOfRestaurants, setFilterListofRestaurants]=useState([]);
    const [searchData, setSearchData]=useState("");
    useEffect(()=>{
        fetchData().catch((error)=>{
            console.log(error);
        });
    },[]);
    console.log("filterListOfRestaurants", filterListOfRestaurants);
    const fetchData=async ()=>{
        const data= await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
        return <h1>you are not online!!! please check your internet connection;</h1>
    }

    return listOfRestaurants?.length===0? <Shimmer/> :(
        <div className="bg-slate-200">  
        <div value={searchData} onChange={(e)=>setSearchData(e.target.value)}>
            <input className=" border-teal-700 border-2  border-solid  m-2 rounded-sm w-64" type="text" placeholder=" Enter items you want to order.."/>
            <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-md text-sm px-4 py-1 text-center " onClick={()=>{
                const filteredData= listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchData.toLowerCase()));;
                setFilterListofRestaurants(filteredData);
            }}>Search</button>
    
        </div>

            <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50  dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-4 py-1 ml-2 text-center me-2 mb-2" onClick={()=>{
                const filterlist= listOfRestaurants.filter(
                    (res)=>res?.info?.avgRating>4.2
                    );

            setFilterListofRestaurants(filterlist);
        }}
        >Top Listed Restaurants</button>
            <div className="flex flex-wrap justify-evenly bg-slate-200">
            {
                filterListOfRestaurants.map((restaurants)=>{
                   return <Link className="" key={restaurants?.info?.id}  to={"/restaurants/"+restaurants?.info?.id}><RestaurantCard  resData={restaurants}/></Link>
                })
            }
        </div>
        </div>
        )
};
export default Body;