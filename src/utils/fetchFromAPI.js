import axios from "axios";

const BASE_URL = "http://localhost:4000/api";

const options = {
  url: BASE_URL,
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

console.log(fetchFromAPI(""));
