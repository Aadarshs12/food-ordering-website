import { CARD_URL } from "../utils/constants";
const RestaurantCard = (props) =>{
    const {resData}=props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRatingString,
        sla,
        costForTwo
    }=resData?.info;
    console.log("resData", resData);
    
    return (
        <div className="m-4 p-4 h-[370px] w-56 bg-gray-100 hover:bg-gray-300  rounded-md">
            <div className="card-img">
            <img className="rounded-lg" src={CARD_URL + cloudinaryImageId} alt="fast-food" />
            </div>
            <h3 className="font-bold pt-2 text-lg text-red-800">{name}</h3>
            <p className="text-blue-800  text-base">{cuisines.join(", ")}</p>
            <h4 className="text-md font-bold">{costForTwo}</h4>
            <h4 className="bg-pink-500 w-12 text-center shadow-gray-50 rounded-md px-1">{avgRatingString}⭐</h4>
            <h4 className="text-sm font-bold">{sla?.deliveryTime}min🛵</h4>
        </div>
    );
};


export default RestaurantCard;