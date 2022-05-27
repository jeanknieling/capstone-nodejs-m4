import * as yup from "yup";

const deleteProductSchema = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup
          .string()
          .min(36, "Id must be a UUID invalid format")
          .required("Id is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default deleteProductSchema;
