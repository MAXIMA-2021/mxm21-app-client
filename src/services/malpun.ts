import axios from "axios";
import { DataMalpun } from "../types/interfaces";

const baseUrl = `${process.env.REACT_APP_API_BASE_URL}/api`;

const daftarMalpun = async (data: DataMalpun) => {
  const request = await axios.post(`${baseUrl}/public/malpun`, data);
  return request.data;
};

export default {
  daftarMalpun,
};
