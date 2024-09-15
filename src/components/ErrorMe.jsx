import {useRouteError} from "react-router-dom";
const ErrorMe=()=>{
    const err=useRouteError();
    return(
        <div>
            <h1>Oops Something Went Wrong...</h1>
            <h2>Please Try Again!!!</h2>
            <h2>{err.status}   :  {err.statusText}</h2>
        </div>
    )
}
export default ErrorMe;