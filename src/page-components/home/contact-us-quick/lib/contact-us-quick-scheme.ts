import * as yup from 'yup';

export const ContactUsQuickSchema = yup
  .object({
    name: yup
      .string()
      .required(`The field is required to fill in`)
      .max(255, `Maximum number of characters 255`),
    phoneNumber: yup
      .string()
      .required(`The field is required to fill in`)
      .max(11, `Maximum number of characters 11`),
  })
  .required();
