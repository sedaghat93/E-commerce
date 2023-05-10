import Product from "../Product/Product";
import "./ProductList.scss";

const ProductList = ({products}) => {
    return ( 
        <div className="product-lists grid ba-whitesmoke my-3">
            {products.map(product => {
                let discountedPrice = (product.price) - (product.price * (product.discountPercentage/100));
                // console.log(discountedPrice);

                return(
                    <Product key={product.id} product={{...product, discountedPrice}}/>
                )
            })}
        </div>
     );
}
 
export default ProductList;