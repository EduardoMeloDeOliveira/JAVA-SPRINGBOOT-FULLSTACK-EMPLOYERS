import axios from "axios";

const apiBaseUrl = "http://localhost:8080/employers"

export const listEmployers = () =>{
    return axios.get(apiBaseUrl);
}

export const createEmployee = (employee) =>{
    return axios.post(apiBaseUrl,employee);
}

export const getEmployee = (id) =>{
    return axios.get(apiBaseUrl + "/" + id)
}

export const updateEmployee = (id,employee) =>{
    return axios.put(apiBaseUrl + "/" + id,employee)
}

export const deleteEmployee = (id) =>{
    return axios.delete(apiBaseUrl + "/" + id)
}