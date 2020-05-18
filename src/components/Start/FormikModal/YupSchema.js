import * as Yup from "yup";

const YupSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email Required"),

    password: Yup.string()
        .min(4, "Must be longer than 3 characters")
        .required("Password required"),

    checkbox: Yup.bool()
        .oneOf([true], 'Accept is required')
});
export default YupSchema;