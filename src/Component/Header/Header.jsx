import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthProvaider } from '../../Provaider/Provaider';


const Header = () => {
    const { user , logOut } = useContext(AuthProvaider);
    // console.log(user)
    const handleLogOut=()=>{
        // console.log('out')
        logOut()
    }
    return (
        <nav className='header'>
            <img className='logo' src={logo} alt="" />
            <div className='nav'>
                <Link to="/">Shop</Link>
                <Link to="/order">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user && 
                    <span className='text-gray-200'> welcome {user.email}  <button onClick={handleLogOut}>Sign Out </button></span>
                }
            </div>
        </nav>
    );
};

export default Header;