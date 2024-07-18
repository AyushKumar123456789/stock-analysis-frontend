import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (password === confirmPassword && password.length > 5) {
            setPasswordMatch(true);
            setError('');
        } else {
            setPasswordMatch(false);
            if (password.length <= 5 && password.length > 0) {
                setError('Password must be at least 6 characters long');
            } else if (confirmPassword.length > 0) {
                setError('Passwords do not match');
            }
        }
    }, [password, confirmPassword]);

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    const navigate = useNavigate();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!passwordMatch) {
            setError('Passwords do not match or are too short');
            return;
        }

        try {
            setLoading(true);
            let response = await axios.post(
                `http://127.0.0.1:3000/api/users/reset-password?token=${token}`,
                { password },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            setLoading(false);
            setSuccess('Password has been reset');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            setLoading(false);
            setError('Reset Password error. Please try again later.');
            console.error('Reset Password error', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-yellow-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-orange-600">
                    Reset Password
                </h2>
                {error && (
                    <div className="text-red-500 text-center mb-4">{error}</div>
                )}
                {success && (
                    <div className="text-green-500 text-center mb-4">
                        {success}
                    </div>
                )}
                <form onSubmit={handleResetPassword}>
                    <div>
                        <label className="block text-gray-700">
                            New Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full mt-6 text-white py-2 rounded-md transition duration-200 ${
                            passwordMatch
                                ? 'bg-green-500 hover:bg-green-600'
                                : 'bg-orange-500 hover:bg-orange-600'
                        }`}
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : 'Change Password'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
