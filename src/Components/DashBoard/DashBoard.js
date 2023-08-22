import {  Outlet, } from "react-router-dom";
import NestedSidebar from "../NestedSidebar/NestedSidebar";
import "./DashBoard.scss";



const DashBoard = () => {

    return ( 
            <div className="container-dashboard">
                <NestedSidebar/>
                {/* <h4>this is dashboard</h4> */}
                <Outlet/>             
            </div>
     );
}
 
export default DashBoard;
