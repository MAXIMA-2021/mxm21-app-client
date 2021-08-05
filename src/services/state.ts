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
  const request = await axios.delete(
    `${baseUrl}/mhs/state/registration/cancelState/${stateID}`,
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
  return request.data;
};

const updateZoomAttendence = async (stateID: number) => {
  const request = await axios.put(
    `${baseUrl}/mhs/state/registration/attendZoom/${stateID}`,
    "",
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
  return request.data;
};

const updateVerifyAbsence = async (
  stateID: number,
  data: { attendanceCode: string }
) => {
  const request = await axios.put(
    `${baseUrl}/mhs/state/registration/verifyAttendance/${stateID}`,
    data,
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
  updateZoomAttendence,
  updateVerifyAbsence,
};
