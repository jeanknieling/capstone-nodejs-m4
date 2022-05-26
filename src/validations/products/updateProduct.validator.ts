import * as yup from "yup";

const updateProductValidatorSchema = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup
          .string()
          .min(1, "Id must be greater then 0")
          .required("Name is required"),
      }),
    },
    body: {
      yupSchema: yup.object().shape({
        name: yup.string().min(3, "Must be at least 3 characters long"),
        description: yup.string(),
        price: yup.number(),
        category: yup.string().min(3, "Must be at least 3 characters long"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default updateProductValidatorSchema;
