import './CategoryProductPage.scss';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import ProductList from "../../Components/ProductList/ProductList";
import { getCategoryProductsStatus, getAllProductsByCategory, fetchAsyncProductsOfCategory } from "../../store/categorySlice";
import { STATUS } from '../../utils/status';

const CategoryProductPage = () => {

    const dispatch = useDispatch();
    const {category} = useParams();
    const categoryProducts = useSelector(getAllProductsByCategory);
    // console.log(categoryProducts);
    const categoryProductsStatus = useSelector(getCategoryProductsStatus);

    useEffect(()=>{
        dispatch(fetchAsyncProductsOfCategory(category));
    },[dispatch,category]);


    return ( 
        <div className='cat-products py-5 bg-whitesmoke'>
            <div className='container'>
                <div className='cat-products-content'>
                    <div className='title-md'>
                        <h3>See Our
                            <span className='text-capitalize'>
                                {category.replace("-"," ")}
                            </span>
                        </h3>
                    </div>
                    {categoryProductsStatus === STATUS.LOADING ?
                      <Loader/> : <ProductList products={categoryProducts}/>  }
                </div>
            </div>
        </div>
     );
}
 
export default CategoryProductPage;