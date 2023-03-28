import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart()
        const saveProduct=[]
        for (const productId in storedCart) {
            const addedProduct=products.find(product=> product.id === productId)
            if (addedProduct) {
                const productQuantity=storedCart[productId]
                // console.log( productQuantity)
                addedProduct.quantity=productQuantity
                saveProduct.push(addedProduct)
            }
            setCart(saveProduct)
            // console.log(productId  , addedProduct)
        }
        
    }, [products]);

    // useEffect(() => {
    //     const storedCart=getShoppingCart()
    //     // console.log(storedCart)
    //     for (const productId in storedCart) {
    //         const addedProduct=products.find(product=>product.id === productId)

    //         const productQuantity=storedCart[productId]
    //         // addedProduct.quantity=productQuantity

    //         console.log( addedProduct)
    //     }
    //     // storedCart.find()
    // }, [products]);


    // console.log(products)
    const addToCard = (product) => {
        // const newCart = [...cart, product]

        let newCart=[];
        const exists=cart.find(pd => pd.id===product.id)
       
        if (!exists) {
            product.quantity=1;
            newCart=[...cart , product]
            //  console.log(newCart)
        }
        else{
            exists.quantity=exists.quantity + 1 ;
            const remaining=cart.filter(pd => pd.id !==product.id)
            // console.log(remaining)
            newCart=[...remaining , exists]
        }

        setCart(newCart)
        addToDb(product.id)
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