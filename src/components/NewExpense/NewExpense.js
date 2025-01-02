import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseHandler = (enteredexpenseData) => {
        const expenseData = {
            ...enteredexpenseData,
            id: Math.random().toString()
        };
        props.addExpense(expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm saveExpense = {saveExpenseHandler} />
    </div>
};

export default NewExpense;