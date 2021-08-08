import axios from "axios";

const baseUrl = `${process.env.REACT_APP_API_BASE_URL}/api`;

const getHomeByCategory = async (chapter: string) => {
  const request = await axios.get(`${baseUrl}/public/home/${chapter}`);
  return request.data;
};

const getChapterData = async (chapter: string) => {
  const request = await axios.get(`${baseUrl}/public/chapter/${chapter}`);
  return request.data;
};

export default {
  getHomeByCategory,
  getChapterData,
};
