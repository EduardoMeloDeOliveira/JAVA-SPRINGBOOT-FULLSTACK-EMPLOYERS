import axios from "axios";

const apiBaseUrl = "http://localhost:8080/employers"

export const listEmployers = () =>{
    return axios.get(apiBaseUrl);
}

export const createEmployee = (employee) =>{
    return axios.post(apiBaseUrl,employee);
}