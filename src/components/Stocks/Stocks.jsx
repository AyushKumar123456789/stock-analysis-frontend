import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import StockForm from './StockForm';
import Cookies from 'js-cookie';
import GlobalContext from '../../context/GlobalState';
import styles from "./Stocks.module.css";

const StocksPage = () => {
    const [showStocks, setShowStocks] = useState([]);
    const [allStocks, setAllStocks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const { fetchStocks, user } = useContext(GlobalContext);

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
        if (selectedCategory === "All" || selectedCategory === "") {
            setShowStocks(allStocks);
        } else {
            setShowStocks(allStocks.filter(stock => stock.category === selectedCategory));
        }
    }, [selectedCategory, allStocks]);

    const handleAddStock = (newStock) => {
        setShowStocks([...showStocks, newStock]);
        window.location.reload();
    };

    const handleChangeCategory = (event) => {
        setSelectedCategory(event.target.value);
    }

    const categories = [...new Set(allStocks.map(stock => stock.category))];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
                Stocks to Invest In and Analysis : {user?.role}
            </h1>

            {user?.role === 'editor' && <StockForm onAdd={handleAddStock} />}

            <select value={selectedCategory} onChange={handleChangeCategory} className={`mb-4 ${styles.category}`}>
                <option value="All">All</option>
                {categories.map((category, idx) => (
                    <option key={idx} value={category}>{category}</option>
                ))}
            </select>

            <ul className={`${styles.list}`}>
                {showStocks.map((stock) => (
                    <li key={stock._id} className={`mb-8 ${styles.card}`}>
                        <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                            {stock.title}
                        </h2>
                        <p className="text-gray-700">{stock.content}</p>
                        <p className="text-gray-700">Category:- {stock.category}</p>
                        <Link
                            to={{
                                pathname: "/stocks/detail",
                                state: stock
                            }}
                            onClick={() => localStorage.setItem("selectedStock", JSON.stringify(stock))}
                        >
                            <button
                                type="submit"
                                className="bg-green-500 text-white px-4 py-2 mt-10 rounded-md hover:bg-green-600 transition-colors duration-200"
                            >
                                Read More ...
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StocksPage;
