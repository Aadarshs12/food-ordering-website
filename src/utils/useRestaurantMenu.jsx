import { useState, useEffect } from "react";
import { API_MENU } from "./constants";
const useRestaurantMenu =(resId)=>{
    const [resMenu, setResMenu]=useState(null);
    useEffect(()=>{
        fetchData().catch((err)=>{
            console.log(err);
        });
    },[]);
    const fetchData=async ()=>{
        const data=await fetch(API_MENU+resId);
        const json= await data.json();
        setResMenu(json?.data);
    }
    return resMenu; 
}
export default useRestaurantMenu;