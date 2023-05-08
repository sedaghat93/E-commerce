import "./Sidebar.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSidebarStatus, setSidebarOff } from "../../store/sidebarSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import  { fetchAsyncCategories } from "../../store/categorySlice";
import { getAllCategories } from '../../store/categorySlice';


const Sidebar = () => {
    const dispatch = useDispatch();
    const isSidebarOn = useSelector(getSidebarStatus);
    const categories = useSelector(getAllCategories);
    console.log(categories);
    
    useEffect(()=>{
        dispatch(fetchAsyncCategories());
    },[dispatch]);

    return ( 
        <aside className={`sidebar ${isSidebarOn ? "hide-sidebar" : ""}`}>
           <button className="sidebar-hide-btn" type="button" onClick={()=>dispatch(setSidebarOff())}>
                <i className="fas fa-times"></i>
           </button>
           <div className="sidebar-cnt">
            <div className="cat-title fs-17 text-uppercase fw-6 ls-1h">All Categories</div>
          
            <ul className="cat-list">
                {
                   categories.map((category,index) => {
                        return(
                            <li key={index} onClick = {() => dispatch(setSidebarOff())}> 
                                <Link to={`category/${category}`} className="cat-list-link text-capitalize">{category.replace("-"," " )}</Link>
                            </li>
                        )
                    })
                }
            </ul>
           </div>
        </aside>
     );
}
 
export default Sidebar;