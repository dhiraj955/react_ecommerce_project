import axios from "axios";
import { API_PRODUCT_URL } from "../config/apiConfig";


export function fetchProductAxios(){
    return axios.get( API_PRODUCT_URL + "/products?limit=8")
}
export function fetchProductAxiosEverything(){
    return axios.get( API_PRODUCT_URL + "/products")
}

export function fetchProductCount(){
    return axios.get(API_PRODUCT_URL + "/products").then((response) => response.data.total);
}