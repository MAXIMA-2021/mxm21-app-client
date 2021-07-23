import axios from "axios";
import { DataHome, DataMediaHome } from "../types/interfaces";
import { Base } from "./BASE_URL";

const baseUrl = `${Base.Url}/api`;

const getHomeByCategory = async (chapter: string) => {
  const request = await axios.get(`${baseUrl}/public/home/${chapter}`);
  return request.data;
};

export default {
  getHomeByCategory,
};
