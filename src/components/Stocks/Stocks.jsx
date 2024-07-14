import React, { useState, useEffect } from "react";
import useAuth from "../../context/AuthContext";
import axios from "axios";
import StockForm from "./StockForm";
import Cookies from "js-cookie";

const StocksPage = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/stocks");
        setStocks(data);
      } catch (error) {
        console.error("Error fetching stocks:", error);
      }
    };

    fetchStocks();
  }, []);

  const handleAddStock = (newStock) => {
    setStocks([...stocks, newStock]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        Stocks to Invest In and Analysis : {Cookies.get("role")}
      </h1>

      {Cookies.get("role") === "editor" && <StockForm onAdd={handleAddStock} />}

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
