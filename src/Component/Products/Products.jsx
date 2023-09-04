import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = ({ product, addToCard, index }) => {
    const {  img, name, price, ratings, seller } = product;


    return (
        <div className='w-96 overflow-hidden border-2 shadow-lg shadow-green-200 rounded-md mx-auto p-3'>
            <figure className='relative ' >
                <img className='rounded-md hover:scale-105 duration-300 shadow-md hover:shadow-green-200 ' src={img} alt="Product-Image" />
                <p className='absolute top-3 left-2'>{index + 1}</p>
            </figure>
            <div className="py-2">
                <p className='text-xl font-normal h-16'>{name}</p>
                <div className=''>
                    <p className='xl'>Price : ${price}</p>
                    <p>Manufacturer:{seller} </p>
                    <p>Rating:$ {ratings} </p>
                </div>

            </div>
            <button className='flex items-center gap-2 justify-center border-4 bg-red-800 w-full rounded-t-xl' onClick={() => addToCard(product)}>
                Add To Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Products;