import { types } from "../../../constants";

export const fetchProductsBySection = (SectionName) => {
    return {
        type: types.FETCH_PRODUCTS_BY_SECTION,
        SectionName,
    };
};

export const fetchProductsBySectionSuccess = (data) => {
    return {
        type: types.FETCH_PRODUCTS_BY_SECTION_SUCCESS,
        payload: {
            data,
        },
    };
};
export const fetchProductsBySectionFailure = () => ({
    type: types.FETCH_PRODUCTS_BY_SECTION_FAILURE,
});