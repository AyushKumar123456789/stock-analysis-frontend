import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../context/AuthContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, role, setRole } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
        } catch (error) {
            console.error(error, 'Login error');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-orange-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-green-700">
                    Login
                </h2>
                <form onSubmit={handleLogin} className="mt-6">
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-6 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Don't have an account?{' '}
                    <Link
                        to="/register"
                        className="text-green-500 hover:text-green-700"
                    >
                        Register
                    </Link>
                </p>

                <p className="mt-2 text-center text-gray-600">
                    <Link
                        to="/forgot-password"
                        className="text-green-500 hover:text-green-700"
                    >
                        Forgot Password?
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
