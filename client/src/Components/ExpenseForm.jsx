import React, { useState, useEffect } from "react";
import {toast} from "react-toastify";
const ExpenseForm = ({ onSubmit, initialData = {} }) => {
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      };

    const [formData, setFormData] = useState({
        amount: initialData.amount || "",
        category: initialData.category || "",
        description: initialData.description || "",
        date: initialData.date ? formatDate(initialData.date) : "",
    });

    useEffect(() => {
        if ( Object.keys(initialData).length){
            setFormData({
                amount: initialData.amount ,
                category: initialData.category,
                description: initialData.description,
                date: initialData.date ? formatDate(initialData.date) : "",
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData?.description?.length<10)
            return toast("Description should be at least 10 characters");
        onSubmit(formData);
        setFormData({
            amount: '' ,
            category: '',
            description: '',
            date: '' ,
        });
    };

 

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md p-4 rounded-md">
            <h2 className="text-lg font-bold mb-4">Add/Edit Expense</h2>            
            <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category"
                className="block w-full p-2 mb-4 border rounded"
                required
            />
            <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="block w-full p-2 mb-4 border rounded"
                required
            />
            <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Amount"
                min="0"
                className="block w-full p-2 mb-4 border rounded"
                required
            />
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="block w-full p-2 mb-4 border rounded"
                required
            />
            <button type="submit" className="bg-blue-500 text-white py-2 px-5 rounded">
                Save
            </button>
        </form>
    );
};

export default ExpenseForm;
