import "./HomePage.scss";
import HeaderSlider from "../../Components/Slider/HeaderSlider.js"
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts, getAllProductStatus, getAllProducts } from "../../store/productSlice";
import {getAllCategories} from "../../store/categorySlice";
import { useEffect } from "react";
import { STATUS } from "../../utils/status";
import Loader from "../../Components/Loader/Loader";
import ProductList from "../../Components/ProductList/ProductList";

const HomePage = () => {

    const dispatch = useDispatch();
    const categories = useSelector(getAllCategories);

    useEffect(()=>{
        dispatch(fetchAsyncProducts(30));
    },[]);
    
    const products = useSelector(getAllProducts);
    const productStatus = useSelector(getAllProductStatus);

    // randomizing the products in the list
    const tempProducts = [];
    if(products.length > 0){
      for(let i in products){
        let randomIndex = Math.floor(Math.random() * products.length);

        while(tempProducts.includes(products[randomIndex])){
            randomIndex = Math.floor(Math.random() * products.length);
        }
        tempProducts[i] = products[randomIndex];
        }
    }

    let catProductsOne = products.filter(product => product.category === categories[0]);
    let catProductsTwo = products.filter(product => product.category === categories[1]);
    let catProductsThree = products.filter(product => product.category === categories[2]);
    let catProductsFour = products.filter(product => product.category === categories[3]);
    let catProductsFive = products.filter(product => product.category === categories[4]);
    let catProductsSix = products.filter(product => product.category === categories[5]);
    let catProductsSeven = products.filter(product => product.category === categories[6]);
    let catProductsEight = products.filter(product => product.category === categories[7]);

    return ( 
        <main>
            <div className="slider-wrapper">
                <HeaderSlider/>
            </div>

            <div className="main-content bg-whitesmoke">
                <div className="container">
                    <div className="categories py-5">
                        <div className="categories-item">
                            <div className="title-md">
                                <h3>See Our Products</h3>
                            </div>
                            {productStatus === STATUS.LOADING ? <Loader/> : <ProductList products={tempProducts} />} 
                        </div>
                        <div className='categories-item'>
                            <div className='title-md'>
                                <h3>{categories[0]}</h3>
                            </div>
                            {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsOne} />}
                        </div>

                        <div className='categories-item'>
                            <div className='title-md'>
                                <h3>{categories[1]}</h3>
                            </div>
                            {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsTwo} />}
                        </div>

                        <div className='categories-item'>
                            <div className='title-md'>
                                <h3>{categories[2]}</h3>
                            </div>
                            {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsThree} />}
                        </div>

                        <div className='categories-item'>
                            <div className='title-md'>
                                <h3>{categories[3]}</h3>
                            </div>
                            {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsFour} />}
                        </div>

                        <div className='categories-item'>
                            <div className='title-md'>
                                <h3>{categories[4]}</h3>
                            </div>
                            {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsFive} />}
                        </div>

                        <div className='categories-item'>
                            <div className='title-md'>
                                <h3>{categories[5]}</h3>
                            </div>
                            {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsSix} />}
                        </div>

                        <div className='categories-item'>
                            <div className='title-md'>
                                <h3>{categories[6]}</h3>
                            </div>
                            {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsSeven} />}
                        </div>

                        <div className='categories-item'>
                            <div className='title-md'>
                                <h3>{categories[7]}</h3>
                            </div>
                            {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsEight} />}
                        </div>
                    </div>
                </div>
            </div>

        </main>
     );
}
 
export default HomePage;