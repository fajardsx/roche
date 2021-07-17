import axios from "axios";
import Constant from "../constant/Constant";

const baseUrl = Constant.RESTLINK;

const callAPI = async (method, uri, params, additionalHeader) => {
  const disableSSL = false;
  const envApi = baseUrl || "";
  const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const url = `${envApi}/${uri}`;
  console.log("AXIOS ", url);
  const headers = { ...defaultHeaders, ...additionalHeader };
  const dataOrParams = ["GET", "DELETE"].includes(method.toUpperCase()) ? "params" : "data";
  const defaultConfig = { method, headers, url };
  const config = {
    ...defaultConfig,
    [dataOrParams]: params,
    withCredentials: true,
  };
  try {
    const response = await axios(config);
    //console.log("Axios result ", respons);
    return response.data;
  } catch (error) {
    // Expired Token
    // if (error.response.status === 401) {
    //   return doRefreshToken({ method, uri, params, additionalHeader });
    // }
    console.log("Axios error ", error);

    if (error.response && error.response.data) {
      throw error.response.data;
    }
    //console.error('error not defined', error)
    return null;
  }
};
export default callAPI;

export const callAPIFull = async (method, uri, params, additionalHeader) => {
  const disableSSL = false;
  const envApi = baseUrl || "";
  const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const url = `${uri}`;
  console.log("AXIOS ", url);
  const headers = { ...defaultHeaders, ...additionalHeader };
  const dataOrParams = ["GET", "DELETE"].includes(method.toUpperCase()) ? "params" : "data";
  const defaultConfig = { method, headers, url };
  const config = {
    ...defaultConfig,
    [dataOrParams]: params,
    withCredentials: true,
  };
  try {
    const response = await axios(config);
    //console.log("Axios result ", respons);
    return response.data;
  } catch (error) {
    // Expired Token
    // if (error.response.status === 401) {
    //   return doRefreshToken({ method, uri, params, additionalHeader });
    // }
    console.log("Axios error ", error);

    if (error.response && error.response.data) {
      throw error.response.data;
    }
    //console.error('error not defined', error)
    return null;
  }
};

//LOCATION
export async function _send_PreverseGeo(resapp, onComplete) {
  try {
    let rest = resapp;
    var resulth = null;

    return (resulth = await fetch(rest, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        //console.log(responseData);
        onComplete(responseData);
      })
      .catch((err) => {
        onComplete(null);
        console.log("Request Err", err);
      })
      .done());
  } catch (e) {
    console.log(e);
  }
}
