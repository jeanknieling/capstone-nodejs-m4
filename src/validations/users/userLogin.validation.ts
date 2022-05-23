import * as yup from "yup";

const userLoginSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        email: yup
        .string()
        .email("Invalid email")
        .required("Email is required"),
        password: yup
          .string()
          .min(8, "Password is very short")
          .required("Password is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};
export default userLoginSchema;
