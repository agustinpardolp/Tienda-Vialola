import { types } from "../../constants";

export const successMessages = {
  [types.CREATE_ARTWORK_SUCCESS]: "Obra creada exitosamente.",
  [types.CREATE_SERIE_SUCCESS]: "Serie creada exitosamente.",
  [types.DELETE_SERIE_SUCCESS]: "Serie eliminada con exito",
  [types.DELETE_ARTWORK_SUCCESS]: "Obra eliminada con exito.", 
  [types.EDIT_ARTWORK_SUCCESS]: "Obra editada con exito",
  [types.EDIT_SERIE_SUCCESS]: "Serie editada con exito.",  
  [types.DELETE_SLIDER_SUCCESS]: "Slide eliminado con exito.", 
};
export const failureMessages = {
  [types.CREATE_ARTWORK_FAILURE]: "La obra no pudo ser creada.",
  [types.CREATE_SERIE_FAILURE]: "La serie no pudo ser creada.",
  [types.DELETE_ARTWORK]:"La obra no pudo ser borrada",
  [types.DELETE_SERIE_FAILURE]: "No puden borrarse series con obras asociadas",
  [types.EDIT_ARTWORK_FAILURE]: "La obra no pudo ser editada.",
  [types.EDIT_SERIE_FAILURE]: "La serie no pudo ser editada.", 
  [types.DELETE_SLIDER_FAILURE]: "No se pudo eliminar. Se debe dejar al menos un slide "
};
