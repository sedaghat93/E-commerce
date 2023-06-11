import './CartModal.scss';
import { shopping_cart } from "../../utils/images";
import { formatPrice } from "../../utils/helper";

const CartModal = ({carts}) => {
    return ( 
        <div className='cart-modal'>
            <div className='container'>
                <h5 className='fw-8 fs-15 font-manrope flex text-center justify-center text-dark py-2'>
                    Recently Added Products
                </h5>
                {
                    (carts?.length > 0 ) ? (
                        <div className='cart-modal-list grid'>
                            {
                                carts.map(cart => {
                                    return (
                                        <div className='cart-modal-item grid align-center font-manrope' key={cart.id}>
                                            <div className='cart-modal-item-img'>
                                                <img src={cart?.thumbnail} alt='' className='img-cover' />
                                            </div>
                                            <div className='cart-modal-item-title fs-13 fw-5 font-manrope text-capitalize'>{cart?.title}</div>
                                            <div className='cart-modal-item-price fs-14 fw-6 text-orange'>
                                                {formatPrice(cart?.discountedPrice)}
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            <div className='text-capitalize view-cart-btn bg-orange fs-15 font-manrope text-center'>
                                view my shopping cart
                            </div>

                        </div>) : (
                            <div className='flex flex-column align-center justify-center cart-modal-empty'>
                                <img src={shopping_cart} alt='' />
                                <h6 className='text-dark fw-4'>No Products Yet!</h6>
                            </div>
                        )
                    
                }
            </div>
        </div>
     );
}
 
export default CartModal;

