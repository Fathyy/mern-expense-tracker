// You define routes in this file using express library
import express from 'express';
import { addIncome, deleteIncome, getIncomes } from '../controllers/incomes';
import { addExpense, deleteExpenses, getExpenses } from '../controllers/expenses';

const router = express.Router();

// routes for the incomes
router.post('/add-income', addIncome)
.get('/get-incomes', getIncomes)
.delete('/delete-income/:id', deleteIncome)

// routes for the expenses
.post('/add-expense', addExpense)
.get('/get-expenses', getExpenses)
.delete('/delete-expenses/:id', deleteExpenses)

export default router;