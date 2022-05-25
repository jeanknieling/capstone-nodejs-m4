import * as yup from "yup";

const updateProductSchema = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup
          .string()
          .min(36, "Id must be a uuid valid format"),
      }),
    },
    body: {
      yupSchema: yup.object().shape({
        name: yup.string().min(3, "Must be at least 3 characters long"),
        description: yup.string().min(3, "Must be at least 3 characters long"),
        price: yup.number().min(0, "Price must be greater than 0"),
        category: yup
          .string()
          .min(3, "Must be at least 3 characters long")
          .required("Category is required"),
      }),
    },
    validateOptions: {
      abortEarly: false,
    },
  },
};

export default updateProductSchema;
