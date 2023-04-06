import React from 'react';
import './review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const Review = ({product , deleteCartItem}) => {
    console.log(product)
    const {img , name , price , shipping , id , quantity}=product
    return (
        <div className='review-cart'>
            <img src={img} alt="" />
            <div className='review-disc'>
               <div>
               <p>Product : {name}</p>
               <p>Price :<span className='price'> ${price}</span> </p>
               <p>Quantity :<span className='price'> {quantity}</span> </p>
               <p>Shipping Charge  :<span className='price'> ${shipping}</span> </p>
               </div>
               <button onClick={() =>deleteCartItem(id)} className='dlt-btn'>
               <FontAwesomeIcon icon={faTrashAlt} />
               </button>
            </div>
        </div>
    );
};

export default Review;