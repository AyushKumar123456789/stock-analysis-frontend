import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../context/GlobalState';

const NotAuthenticatedRoute = ({ children }) => {
    const { user } = useContext(GlobalContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);
    return children;
};

export default NotAuthenticatedRoute;
