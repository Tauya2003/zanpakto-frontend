import axios from "axios";

const BASE_URL = "http://localhost:3000";

const options = {
  url: BASE_URL,
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  } catch (error) {
    console.log(error);
  }
};
