import { useState } from "react";
const UserFunComp= (props)=>{
    const [count, setCount]= useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{
                const Increase= count+1;
                setCount(Increase);
            }}>Count Increase</button>
            <h1>{props.name}</h1>
            <h2>{props.location}</h2>
        </div>
    )
}
export default UserFunComp;