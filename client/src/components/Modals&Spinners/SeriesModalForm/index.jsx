import { withFormik } from "formik";
import { withRouter } from "react-router-dom";
import * as yup from "yup";

import FormModal from "./FormModal";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .max(75, "Maximo 75 caracteres permitidos")
    .required(" "),
  img: yup.string().trim(),
  category: yup.string(),
});

const SerieModalForm = withFormik({
  validateOnChange: true,
  enableReinitialize: false,
  validationSchema,
  validateOnBlur: true,
  mapPropsToValues: ({ data }) => {
    return {
      id: data ? data.id : "",
      name: data ? data.name : "",
      category: data ? data.category?.name : "",
      img: data ? data.img : ""
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

export default withRouter(SerieModalForm);
