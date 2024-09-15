import UserClass from "./UserClass";
import UserFunComp from "./UserFunComp";
const About=()=>{
    return(
        <div>
            <h1>About us!</h1>
            <h2>This food ordering website just like swiggy!</h2>
            <UserClass name={"Aadarsh Singh"} location={"Noida, Uttar Pradesh"}/>
            <UserFunComp name={"Aman Singh"} location={"Noida Sector-52, Uttar Pradesh"}/>
        </div>
    )
}
export default About;