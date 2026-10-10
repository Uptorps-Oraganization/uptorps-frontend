import { api } from "@/api/mainapisetup";
import { useQuery } from "@tanstack/react-query";

const fetchCurrentUser = async () => {
  const response = await api.post("/accounts/refresh/");
  return response.data;
};

export const useAuthQuery = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: fetchCurrentUser,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 60 * 60 * 1000,
  });
};
