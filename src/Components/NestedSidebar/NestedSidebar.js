import "./NestedSidebar.scss";
import menuItem from "../../assets/data";
import { NavLink } from "react-router-dom";
import { AssignmentInd, Logout, ShoppingBag, StarBorder } from "@mui/icons-material";


const NestedSidebar = () => {
    return ( 
        <div className="nestedSidebar" >
            {/* <div className="nestedSidebar-Item"> */}
                {/* {
                    menuItem.map((item, index)=>{
                        return(
                            <NavLink to={item.path} key={index} className="link" >
                                <div className="icon">{item.icon}</div>
                                <div className="link-text">{item.name}</div>
                            </NavLink>
                        )
                    })
                } */}
                <ul className="nestedSidebar-Item">
                    <NavLink end to="" className="link">
                        <li>
                            <span className="icon"><AssignmentInd fontSize="large"/></span>
                            <span className="link-text">Dashboard</span>
                        </li>
                    </NavLink>
                    
                    <NavLink to="order" className="link">
                        <li>
                            <span className="icon"><ShoppingBag fontSize="large"/></span>
                            <span className="link-text">Order</span>
                        </li>
                    </NavLink>
                    
                    <NavLink to="favorite" className="link">
                        <li>
                            <span className="icon"><StarBorder fontSize="large"/></span>
                            <span className="link-text">Favorite</span>
                        </li>
                    </NavLink>
                    
                    <NavLink to="logout" className="link">
                        <li>
                            <span className="icon"><Logout fontSize="large"/></span>
                            <span className="link-text">Logout</span>
                        </li>
                    </NavLink>
                </ul>
            {/* </div> */}
        </div>
     );
}
 
export default NestedSidebar;