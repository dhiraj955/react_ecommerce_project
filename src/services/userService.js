import axios from "axios"
import { API_BASE_URL } from "../config/apiConfig"

export function fetchUserAxios(){
    return axios.get(API_BASE_URL + "/users")
}

export function fetchUserCount(){
    return axios.get(API_BASE_URL + "/users").then((response)=> response.data.total);
}