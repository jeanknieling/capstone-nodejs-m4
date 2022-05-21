import * as yup from "yup";

const userLoginSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        email: yup.string().email("Wrong email/password").required("Email is required"),
        password: yup
          .string()
          .min(8, "Wrong email/password")
          .required("Password is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};
export default userLoginSchema;
