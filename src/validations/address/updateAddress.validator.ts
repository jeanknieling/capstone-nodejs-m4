import * as yup from "yup";

const deleteAddressSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        addressId: yup
          .number()
          .min(1, "AddressId must be greater than 0")
          .required("AddressId is required")
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default deleteAddressSchema;
