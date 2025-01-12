import React, { useState, useEffect } from "react";
import { fetchExpenses } from "../Services/api";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

const Dashboard = () => {
    const [expenses, setExpenses] = useState([]);

    // Fetch expenses from the backend
    const initial = async () => {
        try {
            const res = await fetchExpenses();
            setExpenses(res?.data?.data || []);            
        } catch (error) {
            console.error("Error fetching expenses:", error);
        }
    };

    useEffect(() => {
        initial();
    }, []);

    // // Prepare data for charts
     const categories = [...new Set(expenses?.map((e) => e.category))];
     const categoryData = categories?.map(
         (category) => expenses.filter((e) => e.category === category).length
     );

     const MonthlyExpense = (data) => {
         const groupedData = data.reduce((acc, curr) => {
           const month = new Date(curr.date).toISOString().slice(0, 7); 
           acc[month] = (acc[month] || 0) + curr.amount;
           return acc;
         }, {});
      
         const months = Object.keys(groupedData);
         const totalExpenses = Object.values(groupedData);
      
         return { months, totalExpenses };
       };
       const { months, totalExpenses } = MonthlyExpense(expenses);
    

    return (
        <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">
                <div className="bg-white shadow-md rounded-lg p-6 w-full">
                    <h2 className="font-bold text-lg mb-4">Category Distribution</h2>

                    <PieChart categories={categories} categoryData={categoryData} />
                </div>


                <div className="bg-white shadow-md rounded-lg p-6 w-full">
                    <h2 className="font-bold text-lg mb-4">Monthly Expenses</h2>
                    <BarChart months={months} expenses={totalExpenses}/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
