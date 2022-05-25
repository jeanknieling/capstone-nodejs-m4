import * as yup from "yup";

const updateAddressSchema = {
  schema: {
    params: {
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

export default updateAddressSchema;
