import { Router } from "express"
import { createTransaction, deleteTransaction, editTransaction, getTransactions } from "../controllers/transaction.controller.js"
import { schemaValidation } from "../middlewares/schemaValidation.js"
import { transactionSchema } from "../schemas/transaction.schemas.js"
import { authValidation } from "../middlewares/authValidation.js"

const transactionRouter = Router()

transactionRouter.post("/transactions", authValidation, schemaValidation(transactionSchema), createTransaction)
transactionRouter.get("/transactions", authValidation, getTransactions)
transactionRouter.delete("/transactions/:id",authValidation, deleteTransaction)
transactionRouter.put("/transactions/:id", schemaValidation(transactionSchema), editTransaction)


export default transactionRouter