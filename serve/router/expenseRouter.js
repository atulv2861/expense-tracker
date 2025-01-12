const router = require('express').Router();
const ExpenseController = require('../controller/expenseController')
const Auth = require('../middleware/auth')

// add on each route
router.use(Auth.isAuthenticated)

router.route('/create-expenses').post(ExpenseController.createExpense)
router.route('/get-expenses').get(ExpenseController.getAllExpenses)
router.route('/update-expenses/:id').put(ExpenseController.updateExpense)
router.route('/delete-expenses/:id').delete(ExpenseController.deleteExpense)

module.exports = router;