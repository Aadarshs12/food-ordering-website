import ItemList from "./ItemList";
import {ChevronDownSquare} from "lucide-react"
import { useState } from "react";
const RestaurantCategories = ({data })=>{
    const [showItem, setShowItem]= useState(true);
    const handleClick =()=>{
        setShowItem(!showItem);
    }
    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div onClick={handleClick} className="cursor-pointer flex justify-between">
            <span className="font-bold text-xl">{data.title}({data.itemCards.length})</span>
            <span><ChevronDownSquare /></span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
        </div>
    )
}
export default RestaurantCategories;