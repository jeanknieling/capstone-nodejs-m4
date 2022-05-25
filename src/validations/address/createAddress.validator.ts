import * as yup from "yup";

const createAddressSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        zipcode: yup
        .string().min(8, "CEP inválido, digite apenas números").max(8, "CEP inválido, digite apenas números").required("CEP is required"),
        street: yup
        .string().min(8, "Street must be at least 8 characters long").required("Street is required"),
        number: yup.string().required("Number is required"),
        neighborhood: yup.string().required("Neighborhood is required"),
        complement:yup.string().required("Complement is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default createAddressSchema;
