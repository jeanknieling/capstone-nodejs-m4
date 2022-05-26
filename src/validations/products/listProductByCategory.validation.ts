import * as yup from "yup";

const listProductByCategorySchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        category: yup
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

export default listProductByCategorySchema;
