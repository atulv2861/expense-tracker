import React from "react";

const ExpenseList = ({ expenses, totalCount, currentPage, setCurrentPage, onEdit, onDelete }) => {
    const pageSize=5;
    const totalPages = Math.ceil(totalCount / pageSize);
   
    // Format the date to a readable format
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0"); // Ensures 2-digit day
    const month = date.toLocaleString("default", { month: "short" }); // Abbreviated month
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Handle "Previous" button click
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Handle "Next" button click
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Expenses</h2>

      {/* List of expenses */}
      <ul>
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <li
              key={expense._id}
              className="flex justify-between items-center mb-3 border-[2px] rounded p-2"
            >
              <div>
                <p>
                  <strong>Category:</strong> {expense.category}
                </p>
                <p>
                  <strong>Description:</strong> {expense.description}
                </p>
                <p>
                  <strong>Amount:</strong> &#8377;{expense.amount}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Date:</strong> {formatDate(expense.date)}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => onEdit(expense)}
                  className="text-white px-5 max-h-[30px] rounded bg-blue-400 hover:bg-blue-500 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(expense._id)}
                  className="text-white max-h-[30px] bg-red-600 px-5 rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="text-center text-gray-500 py-4">No expenses to display</li>
        )}
      </ul>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-blue-500 text-white rounded ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600 transition"
            }`}
          >
            Prev
          </button>
          <span className="px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 bg-blue-500 text-white rounded ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600 transition"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
