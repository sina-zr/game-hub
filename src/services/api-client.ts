import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "efe45440b5094bf7a225bba55cb1c793",
  },
});
