import * as yup from "yup";

const minYear: number = new Date().getFullYear() - 18;
const minMonth: number = new Date().getMonth();
const minDay: number = new Date().getDay();

const createUserSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        name: yup
        .string()
        .min(3, "Must be at least 3 characters long")
        .required("Name is required"),
        nickname: yup
        .string()
          .min(3, "Must be at least 3 characters long")
          .required("Nickname is required"),
          birthday: yup
          .date()
          .max(new Date(minYear, minMonth, minDay), "You must be over 18 years old")
          .required("Birthday is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        password: yup
        .string()
        .min(8, "Must be at least 8 characters long")
        .required("Password is required"),
        isAdm: yup.boolean()
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};
export default createUserSchema;
