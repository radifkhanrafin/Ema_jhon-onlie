import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart , setCart] = useState([])


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    // console.log(products)
    const addToCard = (product) => {
        const newCart=[...cart , product]
        setCart(newCart)
    }

    // console.log(cart)
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        addToCard={addToCard}
                    ></Products>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;