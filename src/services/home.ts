import axios from "axios";
import { DataHome, DataMediaHome } from "../types/interfaces";

const baseUrl = "https://apimxm.loca.lt/api";

const tambahHome = async (data: DataHome, token: string) => {
  const request = await axios.post(`${baseUrl}/panit/home`, data, {
    headers: { "x-access-token": `${token}` },
  });
  return request.data;
};

// const tambahMediaHome = async (data: DataMediaHome) =>{
//     const request = await axios.post(`${baseUrl}/panit/home`, data);
//     return request.data;
// }

export default {
  tambahHome,
};
