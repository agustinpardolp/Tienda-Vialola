import { withFormik } from "formik";
import { withRouter } from "react-router-dom";
import * as yup from "yup";

import FormModal from "./FormModal";

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .trim()
    .max(75, "Maximo 75 caracteres permitidos")
    .required(" "),
  img: yup.string().trim(),
  description: yup.string(),
  pathname: yup.string(),
});

const SliderModalForm = withFormik({
  validateOnChange: true,
  enableReinitialize: false,
  validationSchema,
  validateOnBlur: true,
  mapPropsToValues: ({ data }) => {
    return {
      img: data ? data.img : "",
      title: data ? data.title : "",
      description: data ? data.description: "",
      pathname: data ? data.pathname : ""
    };
  },
  handleSubmit: (values, { props }) => {
    const formData = new FormData();
    for (let key in values) {
      formData.append(key, values[key]);
    }
    props.handleConfirm(formData);
    props.posResponse('')
    props.dispatch({ type: "hide" })
  },
})(FormModal);

export default withRouter(SliderModalForm);