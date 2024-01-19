import Joi from "joi";

export const transactionSchema = Joi.object({
    value: Joi.number().positive().required(),
    description: Joi.string().required(),
    type: Joi.string().required().valid("icome", "expense") //isso vai validar se a transição foi renda ou despesa
})