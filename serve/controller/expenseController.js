const Expense = require('../schema/ExpenseSchema');

class ExpenseController {
    async createExpense(req, res) {
        try {
            const data = req.body;
            const expense = new Expense({ ...data, userId: req.user._id });
            await expense.save();
            return res.status(201).json({
                success: true,
                message: 'Expense created successfully',
                data: expense
            });
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: error.message
            });

        }
    }
    async getAllExpenses(req, res) {
        try {
            const page = parseInt(req.query.page) || 1;

            const limit = 5;
            const startIndex = (page - 1) * limit;
            const total = await Expense.countDocuments({ userId: req?.user?._id });
            const expenses = await Expense.find({ userId: req?.user?._id }).skip(startIndex).limit(limit);
            return res.json({
                success: true,
                message: 'Expenses fetched successfully',
                data: expenses,
                totalCount: total
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error fetching expenses',
                error: error.message
            });

        }
    }
    async updateExpense(req, res) {
        try {
            const updatedExpense = await Expense.findByIdAndUpdate({ _id: req.params.id, userId: req.user._id }, req.body, { new: true });
            if (!updatedExpense) {
                return res.status(404).json({
                    success: false,
                    message: 'Expense not found'
                });
            }
            return res.json({
                success: true,
                message: 'Expense updated successfully',
                data: updatedExpense
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error updating expense',
                error: error.message
            });

        }
    }
    async deleteExpense(req, res) {
        try {
            const deletedExpense = await Expense.findByIdAndDelete({ _id: req.params.id, userId: req.user._id });
            if (!deletedExpense) {
                return res.status(404).json({
                    success: false,
                    message: 'Expense not found'
                });
            }
            return res.json({
                success: true,
                message: 'Expense deleted successfully'
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error deleting expense',
                error: error.message
            });

        }


    }

}

module.exports = new ExpenseController();