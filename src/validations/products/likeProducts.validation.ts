import * as yup from "yup";

const likeProductSchema = {
  schema: {
    params: {
      yupSchema: yup.object().shape({
        id: yup
        .string()
        .min(36, "Id must be a uuid valid format")
        .required("Id is required in params"),
      }),
    },
    body: {
      yupSchema: yup.object().shape({
        like: yup
        .boolean()
        .required("Like is required"),
      }),
    },
  },
};
export default likeProductSchema;
