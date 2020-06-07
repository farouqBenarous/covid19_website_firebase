import * as Joi from "joi";

export const languageSchema = Joi.string().equal(['fr','ar','en']).required();