import { withFormik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as yup from "yup";

import { editArtwork, createArtwork } from "../../../redux/artworks/actions/artworks-actions";

import FormModal from "./FormModal";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .max(75, "Maximo 75 caracteres permitidos")
    .required("Nombre de obra es requerido"),
  description: yup
    .string()
    .trim()
    .max(240, "Maximo 240 caracteres permitidos")
    .required("Descripcion es requerida"),
  price: yup.number(),
  img: yup.string().trim().required("Imagen de obra es requerido"),
  priceReproduction: yup.number(),
  allowReproduction: yup.boolean().required(" "),
  allowOriginal: yup.boolean().required(" "),
  categoryId: yup.number().required("Debe seleccionar una categoria"),
  serieId: yup.number().required("Debe seleccionar una serie"),
  category: yup.string(),
  externalLink: yup.boolean()
});

const ArtworkModalForm = withFormik({
  validateOnChange: true,
  enableReinitialize: false,
  validationSchema,
  mapPropsToValues: ({ data }) => {
    return {
      id: data ? data.id : "",
      name: data ? data.name : "",
      description: data ? data.description : "",
      price: data ? data.price : 0,
      priceReproduction: data ? data.priceReproduction : 0,
      allowReproduction: data ? data.allowReproduction : false,
      allowOriginal: data ? data.allowOriginal : false,
      categoryId: data ? data.categoryId : null,
      serieId: data ? data.serieId : null,
      category: data ? data.category?.name : "",
      img: data? data.img: "",
      externalLink: data? data.externalLink : false
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
const mapDispatchToProps = {
  editArtwork,
  createArtwork
};
export default connect(null, mapDispatchToProps)(withRouter(ArtworkModalForm));
