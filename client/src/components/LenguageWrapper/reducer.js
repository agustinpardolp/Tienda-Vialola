import { useState } from "react";
import Spanish from "../../translations/en-es/index.json";
import English from "../../translations/en-us/index.json";
export const lenguageReducer = (state, action) => {
  switch (action.type) {
    case "en-es":
      return {
        ...state, locale: "en-es",
        messages: Spanish,
      };
    case "en-us":
      return {
        ...state, locale: "en-us",
        messages: English,
      };
    default:
      return {
        ...state,
      };
  }
};

export const initialState = {
  locale: "en-es",
  messages: Spanish,
};

// import { useState } from "react";
// import Spanish from "../../translations/en-es/index.json";
// import English from "../../translations/en-us/index.json";
// export const lenguageReducer = (state = initialState, action) => {
//   debugger
//   switch (action.type) {
//     case "en-es":
//       return {
//         state: {
//           locale: "en-es",
//           messages: Spanish,
//         },
//       };
//     case "en-us":
//       return {
//         state: {
//           locale: "en-us",
//           messages: English,
//         },
//       };
//     default:
//       return {
//         ...state,
//       };
//   }
// };

// export const initialState = {
//   state: {
//     locale: "en-es",
//     messages: Spanish,
//   },
// };
