import * as yup from "yup";

const updateUserSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        nickname: yup.string().min(3, "Must be at least 3 characters long"),
        password: yup
          .string()
          .min(8, "Must be at least 8 characters long"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};
export default updateUserSchema;