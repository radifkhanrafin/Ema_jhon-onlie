import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Review from '../review/Review';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import './order.css'

const Order = () => {
    const savedCart = useLoaderData()

    const [cart, setCart] = useState(savedCart)

    const deleteCartItem = (_id) => {
        const reaminingCart = cart.filter(product => product._id !== _id);
        setCart(reaminingCart)
        removeFromDb(_id)
        console.log(_id)
    }

    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }
    console.log(cart)
    return (
        <div className='shop-container'>
<h2>order</h2>
            <div className="">
                {
                    cart.map(product => <Review
                        key={product._id}
                        product={product}
                        deleteCartItem={deleteCartItem}
                    ></Review>)
                }
            </div>

            {/* <div className="cart-container">
                <Cart
                    clearCart={clearCart}
                    cart={cart}>

                    <Link to='/checkout' className='check-btn'>
                        Proceed Checkout <FontAwesomeIcon icon={faCheckDouble} />
                    </Link>

                </Cart>
            </div> */}

        </div>
    );
};

export default Order;