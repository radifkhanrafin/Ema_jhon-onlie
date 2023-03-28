import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart)

    let total=0;
    let totalShipping=0;
    for (const product of cart) {
       total=total + product.price
       totalShipping=totalShipping + product.shipping
    }
    const tax=total*7 / 100;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h4>Selected Items : {cart.length}</h4>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Charge : ${totalShipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h5>Grand Total : ${ (total + totalShipping + tax).toFixed(2)}</h5>
            <div>
            <button>Clear Cart</button>
            </div>
           <div>
           <button>Review Order <FontAwesomeIcon icon={faArrowCircleRight} /> </button>
           </div>

        </div>
    );
};

export default Cart;