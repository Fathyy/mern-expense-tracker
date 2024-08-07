import ExpenseSchema from "../models/ExpenseSchema";

// adding the expense
export const addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const expense = ExpenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  // server side validation
  try {
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (amount <= 0 || !amount === "number") {
      return res.status(400).json({ message: "Amount must be a number" });
    }

    // otherwise save to table
    await expense.save();
    res.status(200).json({message: "Expense Added"})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


// getting the expenses
export const getExpenses = async (req, res) => {
    try {
        const incomes = await ExpenseSchema.find().sort({created_at: -1});
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({message: "Server error while fetching data"})
    }
}

export const deleteExpenses = async (req, res) => {
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
    .then(() => {
        res.status(200).json({message: "Expense deleted successfully"})
    })
    .catch((error) => {
        res.status(500).json({message: "Server error while deleting data"})
    });
}
