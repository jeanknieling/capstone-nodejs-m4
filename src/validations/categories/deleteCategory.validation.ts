import * as yup from "yup";

const deleteCategoryValidatorSchema = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup
        .number()
        .min(1, "Id must be greater then 0")
        .required("Id is required in params"),
      }),
    },
  },
};
export default deleteCategoryValidatorSchema;
