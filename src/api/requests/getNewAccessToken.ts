import { api } from "../mainapisetup";

export const getNewAccessToken = async () => {
  const response = await api.post("/accounts/refresh/");
  return response.data;
};
