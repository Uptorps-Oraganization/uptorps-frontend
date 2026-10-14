import { getNewAccessToken } from "@/api/requests/getNewAccessToken";
import { useQuery } from "@tanstack/react-query";

export const useAuthQuery = () => useQuery({
    queryKey: ["currentUser"],
    queryFn: getNewAccessToken,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 60 * 60 * 1000,
  });
