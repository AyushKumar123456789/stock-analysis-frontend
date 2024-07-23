import { createContext, useEffect, useReducer } from 'react';
import reducer from './AppReducer';
import axios from 'axios';
import Cookies from 'js-cookie';

const BackendURL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const axiosInstance = axios.create({
    baseURL: BackendURL,
    withCredentials: true,
    headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
    },
});

const initialState = {
    user: null,
    loading: false,
    error: null,
};

// creating the context
const GlobalContext = createContext(initialState);
export default GlobalContext;

// creating the provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (!state.user && Cookies.get('token')) {
            console.log(Cookies.get('token'));
            axiosInstance
                .post('/api/users/get-user-from-token')
                .then(({ data }) => {
                    if (data.success) {
                        dispatch({
                            type: 'LOGIN',
                            payload: data.user,
                        });
                    } else {
                        throw new Error(data.message);
                    }
                })
                .catch((err) => {
                    console.error('Error getting user', err);
                    dispatch({
                        type: 'SET_ERROR',
                        payload: 'Error getting user',
                    });
                    // Cookies.remove('token');
                });
        }
    }, []);

    const login = async (email, password) => {
        try {
            const { data } = await axiosInstance.post(
                `${BackendURL}/api/users/login`,
                {
                    email,
                    password,
                }
            );
            console.log(data, 'app.jsx code');
            if (data.success) {
                dispatch({
                    type: 'LOGIN',
                    payload: data.token,
                });
                Cookies.set('token', data.token);
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Login error', error);
            dispatch({
                type: 'SET_ERROR',
                payload: 'Error logging in. Please try again later.',
            });
        }
    };

    const sendEmailLogin = async (email) => {
        try {
            const { data } = await axiosInstance.post(
                `${BackendURL}/api/users/email-signin`,
                {
                    email,
                }
            );
            console.log(data, 'app.jsx code');
            if (data.success) {
                console.log('Email sent');
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Login error', error);
            dispatch({
                type: 'SET_ERROR',
                payload: 'Error logging in. Please try again later.',
            });
        }
    };
    const sendGmailLogin = async (access_token) => {
        try {
            const { data } = await axiosInstance.post(
                `${BackendURL}/api/users/gmail-signin`,
                {
                    access_token,
                }
            );
            console.log(data, 'app.jsx code');
            if (data.success) {
                dispatch({
                    type: 'LOGIN',
                    payload: data.token,
                });
                Cookies.set('token', data.token);
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Login error', error);
            dispatch({
                type: 'SET_ERROR',
                payload: 'Error logging in. Please try again later.',
            });
        }
    };

    const logout = () => {
        axiosInstance.post(`${BackendURL}/api/users/logout`);
        Cookies.remove('token');
        Cookies.remove('role');
        dispatch({
            type: 'LOGOUT',
        });
    };

    const backendRedirectHandler = async () => {
        const token = new URLSearchParams(window.location.search).get('token');

        if (token) {
            // Attempt to set the cookie and verify its existence
            Cookies.set('token', token);

            // Check if the token is correctly set in the cookie
            const savedToken = Cookies.get('token'); // I think this should be before setting the token
            console.log(savedToken, 'Saved Token');

            if (savedToken === token) {
                // Token is correctly set, proceed with redirection
                setTimeout(() => {
                    window.location.href = '/';
                }, 100); // 100ms delay
            } else {
                // Retry setting the token if it wasn't set correctly
                console.error('Failed to set token. Retrying...');
                setTimeout(backendRedirectHandler, 100); // Retry after 100ms
            }
        } else {
            // Handle the case where there's no token
            console.error('No token found in URL');
            window.location.href = '/';
        }
    };

    const fetchStocks = async () => {
        try {
            const { data } = await axiosInstance.get(
                'http://localhost:3000/api/stocks'
            );
            return data;
        } catch (error) {
            console.error('Error fetching stocks:', error);
        }
    };

    return (
        <GlobalContext.Provider
            value={{
                login,
                logout,
                user: state.user,
                loading: state.loading,
                error: state.loading,
                BackendURL,
                sendEmailLogin,
                sendGmailLogin,
                backendRedirectHandler,
                fetchStocks,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
