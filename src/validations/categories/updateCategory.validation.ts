import * as yup from "yup";

const updateCategoryValidatorSchema = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup
          .string()
          .min(1, "Id must be greater then 0")
          .required("Id is required in params"),
      }),
    },
    body: {
      yupSchema: yup.object().shape({
        name: yup.string().min(3, "Must be at least 3 characters long"),
        discount_value: yup.number(),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};
export default updateCategoryValidatorSchema;
