import React, { useContext, useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import GlobalContext from '../../context/GlobalState';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(GlobalContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user]);
    return children;
};

export default ProtectedRoute;
