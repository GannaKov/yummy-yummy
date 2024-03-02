import axios from "axios";

const BASEURL = "https://yelp-backend-2.vercel.app/api";
const instance = axios.create({ baseURL: BASEURL });

//https://yelp-backend-2.vercel.app/api/getById/2
export const getSingleRestaurantById = async (id) => {
  const { data } = await instance.get(`/getById/${id}`);
  return data;
};
