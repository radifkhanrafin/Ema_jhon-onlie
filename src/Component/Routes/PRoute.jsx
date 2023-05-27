import React, { useContext } from 'react';
import { AuthProvaider } from '../../Provaider/Provaider';
import { Navigate, useLocation } from 'react-router-dom';

const PRoute = ({ children }) => {
    const { user, loading } = useContext(AuthProvaider)
    const location = useLocation()
    console.log(location)

    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PRoute;