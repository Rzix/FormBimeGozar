// validationSchemaForm2.js
import Joi from "joi";

const validationSchemaForm2 = Joi.object({
  policyId: Joi.string()
    .pattern(/^[0-9]{3,15}$/)
    .required()
    .messages({
      "string.empty": "کد بیمه‌گذار نباید خالی باشد.",
      "string.pattern.base": "کد بیمه‌گذار باید بین 3 تا 15 رقم باشد.",
    }),
  payerBimegozar: Joi.string()
    .pattern(/^[0-9]{3,15}$/)
    .required()
    .messages({
      "string.empty": "کد پرداخت بیمه‌گذار نباید خالی باشد.",
      "string.pattern.base": "کد پرداخت بیمه گذار باید بین 3 تا 15 رقم باشد.",
    }),
  codeMelli: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.empty": "کد ملی نباید خالی باشد.",
      "string.pattern.base": "کد ملی باید دقیقاً 10 رقم باشد.",
    }),
  bimeGozar: Joi.string()
    .pattern(/^[0-9]{3,15}$/)
    .required()
    .messages({
      "string.empty": "کد رایانامه نباید خالی باشد.",
      "string.pattern.base": "کد رایانامه  باید بین 3 تا 15 رقم باشد."
    }),
  name: Joi.string().pattern(/^[a-zA-Z\u0600-\u06FF\s]+$/).min(2).max(50).required().messages({
    "string.empty": "نام نباید خالی باشد.",
    "string.min": "نام باید حداقل 2 کاراکتر باشد.",
    "string.pattern.base":"لطفا اسمتونو مثل آدم وارد کنید"
  }),
  lastName: Joi.string().pattern(/^[a-zA-Z\u0600-\u06FF\s]+$/).min(2).max(50).required().messages({
    "string.empty": "نام خانوادگی نباید خالی باشد.",
    "string.min": "نام خانوادگی باید حداقل 2 کاراکتر باشد.",
    "string.pattern.base":"لطفا اسمتونو مثل آدم وارد کنید"
  }),
  avatar: Joi.string().allow(null),
});

export default validationSchemaForm2;
