import axiosInstance from "./AxiosInstance";

const localhost = "http://localhost:8000";

export const register = async ({password, username}: IPostUser) => {
  const url = localhost + "/auth/register";
  const res = await axiosInstance.post(url, {
    username,
    password,
  });
  return res.data;
};

export const login = async ({password, username}:IPostUser) => {
  const url = localhost + "/auth/login";
  const res = await axiosInstance.post(url, {
    username,
    password,
  });
  return res.data;
};

export const checkAuth = async() => {
  const url = localhost + "/auth/check-auth";
  const res = await axiosInstance.get(url);
  return res.data;
}
