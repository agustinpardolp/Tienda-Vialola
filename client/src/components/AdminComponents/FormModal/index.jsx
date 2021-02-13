import { withFormik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as yup from "yup";
import { REGEX } from "../../../constants";
import FormModal from "../../../screens/AdminViews/Artwork/ArtworkModalForm/FormModal";
// import {
//   saveNewArtwork,
//   editArtwork,
// } from "../../../../../store/actions/clientsActions";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .max(75, "Maximo 75 caracteres permitidos")
    .required(" "),
  description: yup
    .string()
    .trim()
    .max(240, "Maximo 240 caracteres permitidos")
    .required(" "),
  price: yup.number().trim().required(" "),
  img: yup.string().trim(),
  priceReproduction: yup.number().trim().required(" "),
  allowReproduction: yup.boolean().trim().required(" "),
  allowOriginal: yup.boolean().trim().required(" "),
  categoryId: yup.number().trim().required(" "),
  serieId: yup.number().trim().required(" "),
});

const EditContact = withFormik({
  validateOnChange: true,
  enableReinitialize: false,
  validationSchema,
  validateOnBlur: true,
  mapPropsToValues: ({
    name,
    description,
    price,
    priceReproduction,
    allowReproduction,
    allowOriginal,
    categoryId,
    serieId,
    data,
  }) => ({
    name: data.name ? data.name : "",
    description: data.description ? data.description : "",
    price: data.price ? data.price : "",
    priceReproduction: data.priceReproduction ? data.priceReproduction : "",
    allowReproduction: data.allowReproduction ? data.allowReproduction : false,
    allowOriginal: data.allowOriginal ? data.allowOriginal : false,
    categoryId: data.categoryId ? data.categoryId : "",
    serieId: data.serieId ? data.serieId : "",
  }),
  handleSubmit: (values, { props, setErrors }) => {},
})(NewContactForm);

export const mapStateToProps = (state) => {};

const mapDispatchToProps = {
  saveNewContact,
  editContact,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditContact));
