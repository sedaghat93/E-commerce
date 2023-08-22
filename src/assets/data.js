import { AssignmentInd, ShoppingBag, StarBorder, Logout} from '@mui/icons-material';


const menuItem = [
    {
        path:"",
        activeName:"end",
        name:"Dashboard",
        icon:<AssignmentInd fontSize="large"/>
    },
    {
        path:"order",
        activeName:"",
        name:"Order",
        icon:<ShoppingBag fontSize="large"/>
    },
    {
        path:"favorite",
        activeName:"",
        name:"Favorite",
        icon:<StarBorder fontSize="large"/>
    },
    {
        path:"/logout",
        activeName:"",
        name:"Logout",
        icon:<Logout fontSize="large"/>
    }
]

export default menuItem;