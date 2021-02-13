import { withFormik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as yup from "yup";
import FormModal from "./FormModal";
import {
  saveNewArtwork,
  editArtwork,
} from "../../../../redux/artworks/actions/artworks-actions";

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
  price: yup.number(),
  img: yup.string().trim(),
  priceReproduction: yup.number(),
  allowReproduction: yup.boolean().required(" "),
  allowOriginal: yup.boolean().required(" "),
  categoryId: yup.number().required(" "),
  serieId: yup.number().required(" "),
  category:yup.string(),
});

const ArtworkModalForm = withFormik({
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
    show,
    onHide,
    series,
    categories,
    category
  }) => {
    console.log(data)
    return({
    id: data ? data.id : "",
    name: data ? data.name : "",
    description: data ? data.description : "",
    price: data ? data.price : 0,
    priceReproduction: data ? data.priceReproduction : 0,
    allowReproduction: data ? data.allowReproduction : false,
    allowOriginal: data ? data.allowOriginal : false,
    categoryId: data ? data.categoryId : "",
    serieId: data ? data.serieId : "",
    category: data ? data.category.name: ""
  })},
  handleSubmit: (values, { props, setErrors }) => {
    const formData = new FormData();
    for(let key in values){
      formData.append(key, values[key])
    }
    
    // formData.append('id', values.id);
    // formData.append('name', values.name);
    // formData.append('price', values.price);
    // formData.append('priceReproduction', values.priceReproduction);
    // formData.append('allowReproduction', values.allowReproduction);
    // formData.append('allowOriginal', values.allowOriginal);
    // formData.append('categoryId', values.categoryId);
    // formData.append('serieId', values.serieId);
    // formData.append('img', values.img);
    props.editArtwork(formData)
  },
})(FormModal);

export const mapStateToProps = (state) => {};

const mapDispatchToProps = {
  editArtwork,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ArtworkModalForm));
