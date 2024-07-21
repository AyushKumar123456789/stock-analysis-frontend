import { useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import GlobalContext from '../context/GlobalState';

const BackendRedirect = () => {
    const { backendRedirectHandler } = useContext(GlobalContext);
    useEffect(() => {
        backendRedirectHandler();
    }, []);

    return <div>Redirecting to Website...</div>;
};

export default BackendRedirect;
