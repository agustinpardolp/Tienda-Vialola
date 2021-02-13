import axios from "axios";

export const getProductById = (data) => {
    let { productId } = data;
    return axios.get(`/api/products/${productId}`).then((res) => res);
};

export const getProductsBySection = (data) => {
    let { SectionName } = data;
    return axios.get(`/api/products/${SectionName}/all`).then((res) => res);
};