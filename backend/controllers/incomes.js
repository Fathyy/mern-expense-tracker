import IncomeSchema from "../models/IncomeSchema.js";

// adding the income
export const addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const income = IncomeSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  
  try {
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (amount <= 0 || !amount === "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number" });
    }

    await income.save();
    res.status(200).json({ message: "Income added" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};


// get the incomes
export const getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({created_at: -1});
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}


// delete incomes
export const deleteIncome = async (req, res) => {
    const { id } = req.params;
    IncomeSchema.findByIdAndDelete(id)
    .then(() => {
        res.status(200).json({ message: "Income Deleted" });
    })
    .catch((error) => {
        res.status(500).json({ message: "Server Error" });
    })
}
