import axios from "axios";
import {
  DataLogin,
  DataRegisterMaba,
  DataRegisterOrganisator,
  DataRegisterPanitia,
} from "../types/interfaces";

const baseUrl = `${process.env.REACT_APP_API_BASE_URL}/api`;
const token: any = window.sessionStorage?.getItem("token");

const daftarMhs = async (data: DataRegisterMaba) => {
  const request = await axios.post(`${baseUrl}/mhs/acc/signup`, data);
  return request.data;
};

const loginMhs = async (data: DataLogin) => {
  const request = await axios.post(`${baseUrl}/mhs/acc/signin`, data);
  return request.data;
};

const daftarPanitia = async (data: DataRegisterPanitia) => {
  const request = await axios.post(`${baseUrl}/panitia/acc/signup`, data);
  return request.data;
};

const loginPanitia = async (data: DataLogin) => {
  const request = await axios.post(`${baseUrl}/panitia/acc/signin`, data);
  return request.data;
};

const daftarOrganisator = async (data: DataRegisterOrganisator) => {
  const request = await axios.post(`${baseUrl}/organizator/acc/signup`, data);
  return request.data;
};

const loginOrganisator = async (data: DataLogin) => {
  const request = await axios.post(`${baseUrl}/organizator/acc/signin`, data);
  return request.data;
};

const checkToken = async () => {
  const request = await axios.get(`${baseUrl}/public/acc/checkToken`, {
    headers: {
      "x-access-token": token,
    },
  });
  return request.data;
};

const getPublicState = async () => {
  const request = await axios.get(`${baseUrl}/public/state`);
  return request.data;
};

const getOTP = async (nim: number) => {
  const request = await axios.post(`${baseUrl}/public/forgetPassword`, nim);
  return request.data;
};

const verifyOTP = async (data: any) => {
  const request = await axios.post(`${baseUrl}/public/verifyOTP`, data);
  return request.data;
};

const loginGoogle = async (data: any) => {
  const request = await axios.post(`${baseUrl}/mhs/acc/gauth`, data);
  return request.data;
};

export default {
  daftarMhs,
  loginMhs,
  daftarPanitia,
  loginPanitia,
  daftarOrganisator,
  loginOrganisator,
  checkToken,
  getPublicState,
  getOTP,
  verifyOTP,
  loginGoogle,
};
