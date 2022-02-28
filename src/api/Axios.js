import axios from "axios";

const Axios = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/http://ui-testing.xdoto.io/API/Knitting",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    Origin: "*",
  },
});

export default Axios;
