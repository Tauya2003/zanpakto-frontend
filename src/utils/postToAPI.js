import axios from "axios";

const BASE_URL = "http://localhost:4000/api";

const headers = {
  "Content-Type": "application/json",
};

export const postToAPI = async (url, Data) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/${url}`, Data, headers);
        return data;
    } catch (error) {
        console.log(error);
    }
}


