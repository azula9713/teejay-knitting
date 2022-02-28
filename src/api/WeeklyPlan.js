import Axios from "./Axios";

export const getWeeklyPlans = async () => {
  try {
    const reply = await Axios.get("/GetWeeklyPlan");

    return reply;
  } catch (error) {
    console.log(error);
  }
};
