import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import UseAxios from '../../useAxios/UseAxios';


const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [axiosSecure] = UseAxios();
    useEffect(() => {
        axiosSecure.get('/all-Products')
            .then(res => {
                setProduct(res.data)
            })
    }, []);
    console.log(products)
    return (
        <div className=''>
            <div
                className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {
                    products.map((product , index) => <Products
                        key={product._id}
                        product={product}
                        index={index}

                    ></Products>)
                }
            </div>

            {/* <div className="cart-container">
                <Cart
                    clearCart={clearCart}
                    cart={cart}>
                    <Link to='/order' className='review-btn'>
                        Review Order <FontAwesomeIcon icon={faArrowCircleRight} />
                    </Link>
                </Cart>

            </div> */}

        </div>
    );
};

export default Shop;