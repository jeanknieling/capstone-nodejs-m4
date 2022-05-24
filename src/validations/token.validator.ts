import * as yup from "yup";

const tokenValidatorSchema = {
  schema: {
    headers: {
      yupSchema: yup.object().shape({
        authorization: yup.string().required("Token is required in Authorization Headers"),
      }),
    },
  },
};
export default tokenValidatorSchema;
