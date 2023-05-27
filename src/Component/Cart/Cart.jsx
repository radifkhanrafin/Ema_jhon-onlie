import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove} from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
const Cart = ({ cart, clearCart , children }) => {
    // console.log(cart)

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        if (product.quantity === 0) {
            product.quantity = 1
        }
        total = total + product.price * product.quantity
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity
    }
    const tax = total * 7 / 100;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h4>Selected Items : {quantity}</h4>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Charge : ${totalShipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h5>Grand Total : ${(total + totalShipping + tax).toFixed(2)}</h5>




            <div className='my-5'>
                <button onClick={clearCart} className='btn-clear'>
                    Clear Cart <FontAwesomeIcon icon={faRemove} />
                </button>
            </div>
            <div>
                <button className='btn-review'>
                    {/* Review Order <FontAwesomeIcon icon={faArrowCircleRight} /> */}
                    {children} 
                </button>
            </div>

        </div>
    );
};

export default Cart;