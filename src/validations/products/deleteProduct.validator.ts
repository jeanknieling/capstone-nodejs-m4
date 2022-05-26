import * as yup from "yup";

const deleteProductSchema = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup
          .string()
          .min(36, "Id must be a uuid valid format"),
      }),
    },
    validateOptions: {
      abortEarly: false,
    },
  },
};

export default deleteProductSchema;
