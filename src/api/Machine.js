import Axios from "./Axios";

export const getMachineStatus = async () => {
  try {
    const reply = await Axios.get("/GetMachineStatus");

    return reply;
  } catch (error) {
    console.log(error);
  }
};

export const getMachineDetails = async () => {
  try {
    const reply = await Axios.get("/GetMachineDetails");

    return reply;
  } catch (error) {
    console.log(error);
  }
};
