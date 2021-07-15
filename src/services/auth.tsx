import axios from "axios";

const baseUrl = "http://localhost:8080/api/mhs/acc";

const daftar = async (data) => {
  const request = await axios.post(`${baseUrl}/signup`, data);
  return request.data;
};

const login = async (data) => {
  const request = await axios.post(`${baseUrl}/signin`, data);
  return request.data;
};

export default { daftar, login };
