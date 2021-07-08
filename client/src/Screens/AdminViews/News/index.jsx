import { withFormik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as yup from "yup";

import { editNews } from "../../../redux/news/actions/news-actions";

import EditNewsForm from "./Form";

const validationSchema = yup.object().shape({
  info: yup.string().trim().required("Nombre de obra es requerido"),
});

const News = withFormik({
  validateOnChange: true,
  enableReinitialize: false,
  validationSchema,
  mapPropsToValues: ({ data }) => {
    return {
      info: data ? data.id : "",
    };
  },
  handleSubmit: (values, { props }) => {
    props.editNews(values);
  },
})(EditNewsForm);

const mapDispatchToProps = {
  editNews,
};

export default connect(null, mapDispatchToProps)(withRouter(News));
