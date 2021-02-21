import { withFormik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as yup from "yup";

import { editAbout } from "../../../redux/about/actions/about-actions";

import EditAboutForm from "./Form";

const validationSchema = yup.object().shape({
  info: yup.string().trim().required("Nombre de obra es requerido"),
});

const About = withFormik({
  validateOnChange: true,
  enableReinitialize: false,
  validationSchema,
  mapPropsToValues: ({ data }) => {
    return {
      info: data ? data.id : "",
    };
  },
  handleSubmit: (values, { props }) => {
    props.editAbout(values);
  },
})(EditAboutForm);

const mapDispatchToProps = {
  editAbout,
};

export default connect(null, mapDispatchToProps)(withRouter(About));
