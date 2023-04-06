import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Review from '../review/Review';
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const savedCart = useLoaderData()

    const [ cart , setCart] = useState(savedCart)

    const deleteCartItem = (id) =>{
        const reaminingCart=cart.filter(product => product.id !== id);
        setCart(reaminingCart)
        removeFromDb(id)
        console.log(id)
    }
    // console.log(cart)
    return (
        <div className='shop-container'>
           
            <div className="">
            {
            cart.map(product=><Review
            key={product.id}
            product={product}
            deleteCartItem={deleteCartItem}
            ></Review> )
            }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Order;