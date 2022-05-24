import * as yup from "yup";

const listProductByNameValidatorSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        name: yup
          .string()
          .min(3, "Must be at least 3 characters long")
          .required("Name is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default listProductByNameValidatorSchema;
