import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PasswordInput from '../PasswordInput/PasswordInput';
import GlobalContext from '../../context/GlobalState';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const { BackendURL } = useContext(GlobalContext);
    const [checkyourMail, setCheckyourMail] = useState(false);
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            let return_msg = await axios.post(
                `${BackendURL}/api/users/register`,
                {
                    username,
                    email,
                    password,
                }
            );
            console.log(return_msg.data);
            if (
                return_msg.data.message ==
                'Verification email sent successfully'
            ) {
                setCheckyourMail(true);
                alert(
                    'Registration successful! Please check your email to verify your account.'
                );
            } else {
                alert(`Error: ${return_msg.data.message}`);
            }
        } catch (error) {
            console.error('Registration error', error);
            // Show an alert with the error message if available
            if (
                error.response &&
                error.response.data &&
                error.response.data.error &&
                error.response.data.error.message
            ) {
                alert(
                    `Registration error: ${error.response.data.error.message}`
                );
            } else {
                alert('Registration failed. Please try again.');
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-yellow-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                {checkyourMail == false && (
                    <h2 className="text-2xl font-bold text-center text-orange-600">
                        Register
                    </h2>
                )}
                {checkyourMail == true && (
                    <h2 className="text-2xl font-bold text-center text-green-400">
                        Check your mail !
                    </h2>
                )}
                <form onSubmit={handleRegister} className="mt-6">
                    <div>
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Password</label>
                        <PasswordInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>
                    <button
                        type="submit"
                        onChange={handleRegister}
                        className="w-full mt-6 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-200"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{' '}
                    <Link
                        to="/login"
                        className="text-orange-500 hover:text-orange-700"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
