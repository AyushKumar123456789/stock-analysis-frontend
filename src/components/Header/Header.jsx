import { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../context/GlobalState';

const Header = () => {
    const { logout, user } = useContext(GlobalContext);

    const navOptions = [
        {
            directory: "/",
            label: "Home"
        },
        {
            directory: "/stocks",
            label: "Stocks"
        },
        {
            directory: "/knowledge",
            label: "Knowledge"
        },
        {
            directory: "/about",
            label: "About"
        }
    ];

    return (
        <nav className="bg-blue1 p-4 shadow-md flex flex-col md:flex-row justify-between items-center min-h-[10vh] mx-auto">
            <div className="flex justify-center flex-1 mb-4 md:mb-0  ">
                <ul className="flex space-x-14 ">
                    {navOptions.map((option, i) => (
                        <li>
                            <Link
                                to={option.directory}
                                className="text-white hover:text-orange1 transition-colors duration-200 font-semibold"
                            >
                                {option.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {!user && (
                <div className='flex space-x-4'>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="hidden md:block px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
                    />
                    <div className="flex items-center space-x-2">
                        <Link
                            to={'/Login'}
                            className="bg-orange1 text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-200"
                        >
                            Login
                        </Link>
                        <Link
                            to={'/register'}
                            className="bg-orange1 text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-200"
                        >
                            Signin
                        </Link>
                    </div>
                </div>
            )}
            {user && (
                <>
                    {/* display user.username in best way */}
                    <div className="flex items-center space-x-4 ">
                        <div className="text-white px-4 py-2 rounded-md  transition-colors duration-200">
                            {user.username}
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 ">
                        <Link
                            to={'/Login'}
                            onClick={logout}
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200"
                        >
                            Logout
                        </Link>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Header;
