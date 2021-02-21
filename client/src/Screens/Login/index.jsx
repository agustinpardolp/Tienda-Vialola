import { withFormik } from "formik";
import { connect } from "react-redux";
import * as yup from "yup";

import { REGEX } from "../../constants";
import { loginUser } from "../../redux/login/actions/user-actions";

import LoginForm from "./LoginForm";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    // .matches(REGEX.EMAIL_REGEX_SCHEMA, "Datos faltantes o incorrectos")
    .max(30)
    .required(" "),
  password: yup
    .string()
    .trim()
    .matches(REGEX.ALPHANUMERIC, "Tipo de dato incorrecto")
    .min(4, "Password debe contener al menos 8 caracteres")
    .max(4, "Password debe contener al menos 8 caracteres")
    .required(" "),
  rememberUser: yup.bool(),
});
const Login = withFormik({
  validateOnChange: true,
  enableReinitialize: false,
  validationSchema,
  mapPropsToValues: ({ email, password, rememberUser }) => ({
    email: email || "",
    password: password || "",
    rememberUser: rememberUser || false,
  }),
  handleSubmit: (
    value,
    { props: {loginUser, history } }
  ) => {
    let pathname = "/admin/edit-artwork";
    loginUser(value, history, pathname);
  },
})(LoginForm);

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Login);
