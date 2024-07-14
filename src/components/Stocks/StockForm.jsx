import React, { useState } from "react";
import axios from "axios";

const StockForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3000/api/stocks", {
        title,
        content,
        category,
      });
      onAdd(data);
      setTitle("");
      setContent("");
      setCategory("");
    } catch (error) {
      console.error("Error adding stock:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full mb-2 p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="block w-full mb-2 p-2 border border-gray-300 rounded"
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="block w-full mb-2 p-2 border border-gray-300 rounded"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200"
      >
        Add Stock
      </button>
    </form>
  );
};

export default StockForm;
