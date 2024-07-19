import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../context/AuthContext';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { BackendURL } = useAuth();

    const navigate = useNavigate();

    const handleForgotPassword = async (e) => {
        e.preventDefault();

        if (!email) {
            setError('Email is required');
            return;
        }

        try {
            setLoading(true);
            let response = await axios.post(
                `${BackendURL}/api/users/forgot-password`,
                {
                    email,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(response, 'await axios.post  forgot password : ');
            setLoading(false);
            setSuccess('Password reset email sent. Please check your inbox.');
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        } catch (error) {
            setLoading(false);
            setError(
                'Error sending password reset email. Please try again later.'
            );
            console.error('Forgot Password error', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-yellow-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-orange-600">
                    Forgot Password
                </h2>
                {error && (
                    <div className="text-red-500 text-center mb-4">{error}</div>
                )}
                {success && (
                    <div className="text-green-500 text-center mb-4">
                        {success}
                    </div>
                )}
                <form onSubmit={handleForgotPassword}>
                    <div>
                        <label className="block text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full mt-6 text-white py-2 rounded-md transition duration-200 ${
                            email
                                ? 'bg-orange-500 hover:bg-orange-600'
                                : 'bg-gray-500 cursor-not-allowed'
                        }`}
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : 'Send Reset Link'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
