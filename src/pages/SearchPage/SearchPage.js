import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { clearSearch, fetchAsyncSearchProduct, getSearchProducts, getSearchProductsStatus } from "../../store/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../../utils/status";
import Loader from "../../Components/Loader/Loader";
import ProductList from "../../Components/ProductList/ProductList";

const SearchPage = () => {

    const dispatch = useDispatch();
    const {searchTerm} = useParams();
    // console.log(searchTerm);
    const searchProuducts = useSelector(getSearchProducts);
    // console.log(searchProuducts);
    const searchProuductsStatus = useSelector(getSearchProductsStatus);

    useEffect(()=>{
        dispatch(clearSearch());
        dispatch(fetchAsyncSearchProduct(searchTerm));
    },[searchTerm]);

    if(searchProuducts.length === 0){
        return(
           <div className="container" style={{minHeight:"70vh"}}>
                <div className="fw-5 text-danger py-5">
                    <h1>No Products Found.</h1>
                </div>
           </div>
        )
    }

    return ( 
        <main>
            <div className="search-content bg-whitesmoke">
                <div className="container">
                    <div className="py-5">
                        <div className="title-md">
                            <h3>Search results: </h3>
                        </div>
                        <br/>
                        {
                            searchProuductsStatus === STATUS.LOADING ?
                            <Loader/> : <ProductList products={searchProuducts}/>
                        }
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default SearchPage;