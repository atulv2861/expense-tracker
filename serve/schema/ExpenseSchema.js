const mongoose = require('mongoose')


const ExpenseSchema = new mongoose.Schema({
    amount: {type: Number, required: [true,"Amount is required"],min: 0},
    category: {type: String,trim:true, required: [true,"Category is required"],minLength: [2,"minimum length of 2 character is required"], maxLength:[100,"Max length excedded from 100 characters"]},
    description: {type: String, trim:true,required:[true,"Description is required"],minLength: [10,"minimum length of 10 characters is required"],maxLength:[200,"Maximum length of 200 characters is required"]},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date:{type: mongoose.Schema.Types.Date, default: new Date(), required: true},
},{
    timestamps: true,
});

const Expense = mongoose.model("Expense",ExpenseSchema);

module.exports = Expense;