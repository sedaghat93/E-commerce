import "./DashBoardContent.scss";
import { useEffect, useState } from "react";
import greeting from "../../assets/timeData"

const DashBoardContent = () => {

   const [items, setItems] = useState([]);

      useEffect(() => {
      const items = JSON.parse(localStorage.getItem('authState'));
      console.log(items.name);
      if (items) {
         setItems(items);
      }
      }, []);

    return ( 

     <div className="header-dashboard" >
         <div className="header-dashboard__title">
            <h2>hi {items.name} 😍 : {greeting}</h2>
            <h3>wellcom to shop.us</h3> 
         </div>
     </div>
     );
}
 
export default DashBoardContent;