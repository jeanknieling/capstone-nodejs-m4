import * as yup from "yup";

const deleteCategoryValidatorSchema = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup
        .string()
        .min(3, "Must be at least 3 characters long")
        .required("Id is required in params"),
      }),
    },
  },
};
export default deleteCategoryValidatorSchema;
