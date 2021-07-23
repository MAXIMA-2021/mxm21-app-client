import axios from "axios";
import { Base } from "./BASE_URL";

const baseUrl = `${Base.Url}/api`;

const token: any = window.sessionStorage?.getItem("token");
const config = {
  headers: {
    "x-access-token": token,
  },
};

const tambahHome = async (data: unknown) => {
  const request = await axios.post(`${baseUrl}/panit/home`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      "x-access-token": token,
    },
  });
  return request;
};

const tambahMedia = async (data: unknown, homeID: number) => {
  const request = await axios.post(`${baseUrl}/panit/home/${homeID}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      "x-access-token": token,
    },
  });
  return request.data;
};

const getAllHome = async () => {
  const request = await axios.get(`${baseUrl}/public/home`, config);
  return request.data;
};

const getHomeBySearchKey = async (searchKey: string) => {
  const request = await axios.get(
    `${baseUrl}/public/home?organizator=${searchKey}`,
    config
  );
  return request;
};

const updateHome = async (homeID: string, newObject: any) => {
  const request = await axios.put(`${baseUrl}/panit/home/${homeID}`, newObject);
  return request;
};

const deleteHome = async (homeID: string) => {
  const request = await axios.delete(`${baseUrl}/panit/home/${homeID}`, config);
  return request;
};

export default {
  tambahHome,
  tambahMedia,
  getAllHome,
  getHomeBySearchKey,
  updateHome,
  deleteHome,
};
