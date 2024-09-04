import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { GlobalProvider } from './context/GlobalState.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <GlobalProvider>
                <App />
            </GlobalProvider>
        </GoogleOAuthProvider>
    </React.StrictMode>
);
