import React, { useEffect, useState } from "react";
import { fetchExpenses, createExpense, updateExpense, deleteExpense } from "../Services/api";
import ExpenseForm from "../Components/ExpenseForm";
import ExpenseList from "../Components/ExpenseList";
import Dashboard from "../Components/Dashboard";

const Home = () => {
    const [expenses, setExpenses] = useState([]);
    const [editingExpense, setEditingExpense] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalcount] = useState();
    const initial = async () => {
        const res = await fetchExpenses(currentPage);        
        setExpenses(res?.data?.data);
        setTotalcount(res?.data?.totalCount)
    }
    useEffect(() => {
        initial();
    }, [currentPage]);

    const handleAddOrEdit = async (data) => {
        if (editingExpense) {
            await updateExpense(editingExpense._id, data);
            setEditingExpense(null);
        } else {
            await createExpense(data);
        }
        initial();
    };

    const handleDelete = async (id) => {
        await deleteExpense(id);
        initial();
    };

    return (
        <div className="container mx-auto p-6 space-y-6">
            <ExpenseForm onSubmit={handleAddOrEdit} initialData={editingExpense || {}} />
          
            <ExpenseList expenses={expenses} totalCount={totalCount} currentPage={currentPage} setCurrentPage={setCurrentPage} onEdit={setEditingExpense} onDelete={handleDelete} />
        </div>
    );
};

export default Home;
