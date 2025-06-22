import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  amount: {
    type: Number,
    required: true,
    min: [0, "Amount cannot be negative"]
  },
  date: {
    type: Date,
    default: Date.now
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  }
}, { timestamps: true });

export const Expense = mongoose.model("Expense", expenseSchema);


