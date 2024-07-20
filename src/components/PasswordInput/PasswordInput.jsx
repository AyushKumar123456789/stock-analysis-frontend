import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordInput = ({ value, onChange, className }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="relative w-full">
            <input
                type={passwordVisible ? "text" : "password"}
                value={value}
                onChange={onChange}
                className={className}
                required
            />
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 top-2 px-3 py-2 text-gray-600 hover:text-gray-800 flex items-center justify-center"
            >
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
            </button>
        </div>
    );
};

export default PasswordInput;
