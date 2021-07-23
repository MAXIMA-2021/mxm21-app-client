import axios from "axios";
import {
  DataLogin,
  DataRegisterMaba,
  DataRegisterOrganisator,
  DataRegisterPanitia,
} from "../types/interfaces";
import { Base } from "./BASE_URL";

const baseUrl = `${Base.Url}/api`;

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

export default {
  daftarMhs,
  loginMhs,
  daftarPanitia,
  loginPanitia,
  daftarOrganisator,
  loginOrganisator,
};
