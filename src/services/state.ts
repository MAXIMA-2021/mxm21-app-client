import axios from "axios";

const baseUrl = `${process.env.REACT_APP_API_BASE_URL}/api`;
const token: any = window.sessionStorage?.getItem("token");

const getStateReistration = async () => {
  const request = await axios.get(`${baseUrl}/mhs/state/registration`, {
    headers: {
      "x-access-token": token,
    },
  });
  return request.data;
};

const deleteStateRegistration = async (stateID: number) => {
  const request = await axios.get(
    `${baseUrl}/mhs/state/registration/cancelState/${stateID}`,
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
  return request.data;
};

export default {
  getStateReistration,
  deleteStateRegistration,
};
