import React from "react";

const StockDetail = () => {

    const stock = JSON.parse(localStorage.getItem("selectedStock"));

    if (!stock) return <p>No stock details available.</p>

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-green-700 mb-8">{stock.title}</h1>
            <p className="text-gray-700">{stock.content}</p>
            <p className="text-gray-500">Category: {stock.category}</p>
            <p className="text-gray-500">Created At: {formatDate(stock.createdAt)}</p>
        </div>
    )
};

export default StockDetail;