import axios from "axios";

const BASEURL = "https://yelp-backend-2.vercel.app/api/restaurant";
const instance = axios.create({ baseURL: BASEURL });

export const getSingleRestaurantById = async (id) => {
  const { data } = await instance.get(`/${id}`);
  return data;
};
