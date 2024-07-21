import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import StockForm from './StockForm';
import Cookies from 'js-cookie';
import GlobalContext from '../../context/GlobalState';

const StocksPage = () => {
    const [stocks, setStocks] = useState([]);
    const { fetchStocks, user } = useContext(GlobalContext);

    useEffect(() => {
        const fetchStocksHandler = async () => {
            try {
                const res = await fetchStocks();
                setStocks(res);
            } catch (error) {
                console.error('Error fetching stocks:', error);
            }
        };

        fetchStocksHandler();
    }, [user]);

    const handleAddStock = (newStock) => {
        setStocks([...stocks, newStock]);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
                Stocks to Invest In and Analysis : {user?.role}
            </h1>

            {user?.role === 'editor' && <StockForm onAdd={handleAddStock} />}

            {stocks.map((stock) => (
                <div key={stock._id} className="mb-8">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                        {stock.title}
                    </h2>
                    <p className="text-gray-700">{stock.content}</p>
                </div>
            ))}
        </div>
    );
};

export default StocksPage;
