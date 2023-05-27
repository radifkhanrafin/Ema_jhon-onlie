import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Products = (props) => {
    // console.log(props)
    const addToCard = props.addToCard
    // console.log(addToCard)
    const { category, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock } = props.product


    return (
        <div className='product'>
            <figure className='product-img' > <img className='animate-pulse' src={img} alt="Product-Image" /></figure>
            <div className="product-body">
                <div className='product-disc'>
                    <p>{name}</p>
                    <p>Price : ${price}</p>
                </div>
                <div>
                    <p>Manufacturer:{seller} </p>
                    <p>Rating:$ {ratings} </p>
                </div>
            </div>
            <button onClick={() => addToCard(props.product)}> <span style={{marginRight:5}}>Add to Cart </span>
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Products;