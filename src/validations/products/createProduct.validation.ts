import * as yup from "yup";

const createProductSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        name: yup
          .string()
          .min(3, "Must be at least 3 characters long")
          .required("Name is required"),
        description: yup.string().required("Description is required"),
        price: yup.number().required("Description is required"),
        category: yup
          .string()
          .min(3, "Must be at least 3 characters long")
          .required("Description is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default createProductSchema;
