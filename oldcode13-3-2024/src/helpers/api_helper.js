import axios from "axios"
import Auth from "./Auth/Auth"
//pass new generated access token here
const token = "Bearer "+Auth.getToken();

//apply base url for axios
const API_URL = "https://showcase.demobw.com/webapi/api"

const axiosApi = axios.create({
  baseURL: API_URL,
});

console.log("bear13",token);

axiosApi.defaults.headers.common["Authorization"] = token

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}

export async function postformdata(url,data){
  const finalurl=API_URL+url;
  const options = {
    method: "POST",
   headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        Authorization: token
      },
  };

  return await axios.post(finalurl,data, options).then(response => response.data)
}

export async function putformdata(url,data){
  const finalurl=API_URL+url;
  const options = {
    method: "PUT",
   headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        Authorization: token
      },
  };

  return await axios.put(finalurl,data, options).then(response => response.data)
}