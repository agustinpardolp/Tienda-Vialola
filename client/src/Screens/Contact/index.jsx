import { withFormik } from "formik";
import { connect } from "react-redux";
import * as yup from "yup";
import { REGEX } from "../../constants";
import ContactForm from "./components/Form";
import { createClientConsult } from "../../redux/artworks/actions/artworks-actions";

const validationSchema = yup.object().shape({
  clientName: yup
    .string()
    .trim()
    .min(2)
    .max(75, " ")
    .required("contact.inputRequired"),
  email: yup
    .string()
    .matches(REGEX.EMAIL_REGEX_SCHEMA, " ")
    .trim()
    .max(240, " ")
    .required("contact.inputRequired"),
  country: yup.string().trim().required("contact.inputRequired").min(3),
  city: yup.string().trim().required("contact.inputRequired").min(3),
  artworkData: yup.string().trim().required("contact.inputRequired"),
  subject: yup.string().required("contact.inputRequired"),
  message: yup.string().required("contact.inputRequired"),
});

const Contact = withFormik({
  validateOnChange: true,
  enableReinitialize: false,
  validationSchema,
  validateOnBlur: true,
  mapPropsToValues: ({
    data,
    clientName,
    email,
    country,
    city,
    artworkData,
    subject,
    message,
  }) => ({
    clientName: clientName || "",
    email: email || "",
    country: country || "",
    city: city || "",
    subject: subject,
    message: message || "",
    artworkData: data?.name
      ? `${data.name}- Serie: ${data.serie.name} - ${data.description} - ${data.price} / ${data.priceReproduction}`
      : artworkData,
  }),
  handleSubmit: (values, { props, setErrors }) => {
    props.createClientConsult(values);
  },
})(ContactForm);

const mapDispatchToProps = {
  createClientConsult,
};

export default connect(null, mapDispatchToProps)(Contact);
