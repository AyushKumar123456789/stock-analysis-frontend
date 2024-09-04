import React, { useState, useEffect, useContext } from 'react';
import StockForm from './StockForm';
import GlobalContext from '../../context/GlobalState';
import styles from './Stocks.module.css';

const StocksPage = () => {
    const [showStocks, setShowStocks] = useState([]);
    const [allStocks, setAllStocks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [titleFilter, setTitleFilter] = useState(''); // State for title filter
    const { fetchStocks, user } = useContext(GlobalContext);
    const [expandedStock, setExpandedStock] = useState(null);

    const toggleExpand = (stockId) => {
        setExpandedStock((prev) => (prev === stockId ? null : stockId));
    };

    useEffect(() => {
        const fetchStocksHandler = async () => {
            try {
                const res = await fetchStocks();
                setShowStocks(res);
                setAllStocks(res);
            } catch (error) {
                console.error('Error fetching stocks:', error);
            }
        };

        fetchStocksHandler();
    }, [user]);

    useEffect(() => {
        let filteredStocks = allStocks;

        if (selectedCategory !== 'All' && selectedCategory !== '') {
            filteredStocks = filteredStocks.filter(
                (stock) => stock.category === selectedCategory
            );
        }

        if (titleFilter !== '') {
            filteredStocks = filteredStocks.filter((stock) =>
                stock.title.toLowerCase().includes(titleFilter.toLowerCase())
            );
        }

        setShowStocks(filteredStocks);
    }, [selectedCategory, titleFilter, allStocks]);

    const handleAddStock = (newStock) => {
        setShowStocks([...showStocks, newStock]);
        window.location.reload();
    };

    const handleChangeCategory = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleTitleFilterChange = (event) => {
        setTitleFilter(event.target.value);
    };

    const categories = [...new Set(allStocks.map((stock) => stock.category))];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
                Stocks to Invest In and Analysis : {user?.role}
            </h1>

            {user?.role === 'editor' && <StockForm onAdd={handleAddStock} />}

            <div className="mb-4 flex flex-col md:flex-row gap-4">
                <select
                    value={selectedCategory}
                    onChange={handleChangeCategory}
                    className={`w-full md:w-auto ${styles.category}`}
                >
                    <option value="All">All</option>
                    {categories.map((category, idx) => (
                        <option key={idx} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                <input
                    type="text"
                    value={titleFilter}
                    onChange={handleTitleFilterChange}
                    placeholder="Filter by Title"
                    className="w-full md:w-auto p-2 border rounded-lg"
                />
            </div>

            <ul className="w-full">
                {showStocks.map((stock) => (
                    <li
                        key={stock._id}
                        className={`mb-8 p-6 border rounded-lg shadow-sm ${styles.card}`}
                    >
                        <h2 className="text-3xl font-bold text-orange-500 mb-2">
                            {stock.title}
                        </h2>
                        <p className="text-xl font-medium text-gray-600 mb-4">
                            Category: {stock.category}
                        </p>
                        <p className="text-base text-gray-700 mb-4">
                            {expandedStock === stock._id
                                ? stock.content
                                : `${stock.content.substring(0, 150)}...`}
                        </p>
                        <button
                            onClick={() => toggleExpand(stock._id)}
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200"
                        >
                            {expandedStock === stock._id
                                ? 'Show Less'
                                : 'Read More'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StocksPage;
