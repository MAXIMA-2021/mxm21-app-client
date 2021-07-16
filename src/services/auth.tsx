import axios from "axios";
require("dotenv").config();

const { REACT_APP_BASE_URL } = process.env;
const baseUrl = `${REACT_APP_BASE_URL}/api/mhs/acc`;

const daftar = async (data) => {
  const request = await axios.post(`${baseUrl}/signup`, data);
  return request.data;
};

const login = async (data) => {
  const request = await axios.post(`${baseUrl}/signin`, data);
  return request.data;
};

export default { daftar, login };
