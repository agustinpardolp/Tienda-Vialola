import { types } from "../../../constants";

export const fetchSlider = (query) => {
  return {
    type: types.FETCH_SLIDER,
    query,
  };
};

export const fetchSliderSuccess = (data) => {
  return {
    type: types.FETCH_SLIDER_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchSliderFailure = () => ({
  type: types.FETCH_SLIDER_FAILURE,
});

export const editSlider = (sliderData) => {
  return {
    type: types.EDIT_SLIDER,
    sliderData,
  };
};

export const editSliderSuccess = (data) => {
  
  return {
    type: types.EDIT_SLIDER_SUCCESS,
    payload: {
      data,
    },
  };
};
export const editSliderFailure = () => ({
  type: types.EDIT_SLIDER_FAILURE,
});

export const deleteSlider = (sliderId) => {
  return {
    type: types.DELETE_SLIDER,
    sliderId,
  };
};

export const deleteSliderSuccess = (data) => {
  return {
    type: types.DELETE_SLIDER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const deleteSliderFailure = () => ({
  type: types.DELETE_SLIDER_FAILURE,
});
