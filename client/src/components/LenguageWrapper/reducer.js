import Spanish from "../../translations/en-es/index.json";
import English from "../../translations/en-us/index.json";
import { lenguageTypes } from "./constants";

export const lenguageReducer = (state, action) => {
  switch (action.type) {
    case lenguageTypes.en_es:
      return {
        ...state,
        locale: lenguageTypes.en_es,
        messages: Spanish,
      };
    case lenguageTypes.en_us:
      return {
        ...state,
        locale: lenguageTypes.en_us,
        messages: English,
      };
    default:
      return {
        ...state,
      };
  }
};

export const initialState = {
  locale: lenguageTypes.en_es,
  messages: Spanish,
};
