import axios from "axios";

const baseUrl = `${process.env.REACT_APP_API_BASE_URL}/api`;

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
    `${baseUrl}/public/home?organizator=${searchKey}`
  );
  return request.data;
};

const getMahasiswaByNim = async (nim: string) => {
  const request = await axios.get(
    `${baseUrl}/panitia/acc/getMahasiswa?param=${nim}`,
    config
  );
  return request.data;
};

const getAllMahasiswa = async () => {
  const request = await axios.get(
    `${baseUrl}/panitia/acc/getMahasiswa`,
    config
  );
  return request.data;
};

const updateMahasiswa = async (nim: string, newObject: any) => {
  const request = await axios.put(
    `${baseUrl}/panitia/acc/editMahasiswa/${nim}`,
    newObject,
    config
  );
  return request;
};

const updateHome = async (homeID: string, newObject: any) => {
  const request = await axios.put(
    `${baseUrl}/panit/home/${homeID}`,
    newObject,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": token,
      },
    }
  );
  return request;
};

const deleteHome = async (homeID: string) => {
  const request = await axios.delete(`${baseUrl}/panit/home/${homeID}`, config);
  return request;
};

const updateHomeMedia = async (photoID: number, data: any) => {
  const request = await axios.put(
    `${baseUrl}/panit/home/linkMedia/${photoID}`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": token,
      },
    }
  );
  return request;
};

const deleteHomeMedia = async (photoID: string) => {
  const request = await axios.delete(
    `${baseUrl}/panit/home/linkMedia/${photoID}`,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": token,
      },
    }
  );
  return request;
};

const getAllState = async () => {
  const request = await axios.get(`${baseUrl}/state/activities`, config);
  return request.data;
};

const getRegistrationStateMhs = async (stateID: string) => {
  const request = await axios.get(
    `${baseUrl}/panit/state/registration?stateID=${stateID}`,
    config
  );
  return request.data;
};

const getSpecificState = async (stateID: string) => {
  const request = await axios.get(
    `${baseUrl}/state/activities?param=${stateID}`,
    config
  );
  return request.data;
};

const getAllPanitia = async () => {
  const request = await axios.get(`${baseUrl}/panitia/acc/getPanitia`, config);
  return request.data;
};

const getAllOrganisator = async () => {
  const request = await axios.get(
    `${baseUrl}/organizator/acc/getOrganizator`,
    config
  );
  return request.data;
};

const deleteState = async (stateID: string) => {
  const request = await axios.delete(
    `${baseUrl}/state/activities${stateID}`,
    config
  );
  return request;
};

const tambahState = async (data: unknown) => {
  const request = await axios.post(`${baseUrl}/state/activities`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      "x-access-token": token,
    },
  });
  return request.data;
};

const updateState = async (stateID: number, data: unknown) => {
  const request = await axios.put(
    `${baseUrl}/state/activities/${stateID}`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": token,
      },
    }
  );
  return request.data;
};

export default {
  tambahHome,
  tambahMedia,
  getAllHome,
  getAllState,
  getAllMahasiswa,
  getAllPanitia,
  getAllOrganisator,
  getHomeBySearchKey,
  getMahasiswaByNim,
  updateMahasiswa,
  updateHome,
  deleteHome,
  deleteState,
  getSpecificState,
  tambahState,
  getRegistrationStateMhs,
  updateHomeMedia,
  deleteHomeMedia,
  updateState,
};
