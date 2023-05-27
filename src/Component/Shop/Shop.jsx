import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([])

    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart()
        const saveProduct = []
        for (const productId in storedCart) {
            const addedProduct = products.find(product => product.id === productId)
            if (addedProduct) {
                const productQuantity = storedCart[productId]
                // console.log( productQuantity)
                addedProduct.quantity = productQuantity
                saveProduct.push(addedProduct)
            }
            setCart(saveProduct)
            // console.log(productId  , addedProduct)
        }

    }, [products]);

    // console.log(products)
    const addToCard = (product) => {
        // const newCart = [...cart, product]

        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id)

        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
            //  console.log(newCart)
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id)
            // console.log(remaining)
            newCart = [...remaining, exists]
        }

        setCart(newCart)
        addToDb(product.id)
    }

    // console.log(cart)
    return (
        <div className='flex flex-col-reverse md:flex-row'>
            <div
                className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        addToCard={addToCard}

                    ></Products>)
                }
            </div>

            <div className="cart-container">
                <Cart
                    clearCart={clearCart}
                    cart={cart}>
                    <Link to='/order' className='review-btn'>
                        Review Order <FontAwesomeIcon icon={faArrowCircleRight} />
                    </Link>
                </Cart>

            </div>

        </div>
    );
};

export default Shop;