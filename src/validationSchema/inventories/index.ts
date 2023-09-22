import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  name_at: yup.string().nullable(),
  price_at: yup.number().integer().nullable(),
});
