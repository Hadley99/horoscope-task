import Axios from "axios";

export const fetchData = async (sign, selectedDate) => {
  const config = {
    params: {
      sign: sign,
      day: selectedDate,
    },
    headers: {
      "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    },
  };
  const { data } = await Axios.post(
    "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
    null,
    config
  );
  return data;
};
