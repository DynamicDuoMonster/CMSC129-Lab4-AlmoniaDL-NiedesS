const express = require("express");
const { createExpense, listExpenses, removeExpense } = require("../controllers/expenseController");

const router = express.Router();

router.post("/", createExpense);
router.get("/", listExpenses);
router.delete("/:id", removeExpense);

module.exports = router;