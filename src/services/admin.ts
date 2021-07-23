import axios from "axios";

const baseUrl = "https://apimxm.loca.lt/api";

const token = window.sessionStorage.getItem("token");
const config = {
  headers: {
    "x-access-token": token,
  },
};

const getAllHome = async () => {
  const request = axios.get(`${baseUrl}/public/home`, config);
  return request;
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

export default {
  getAllHome,
  getHomeBySearchKey,
  updateHome,
};
