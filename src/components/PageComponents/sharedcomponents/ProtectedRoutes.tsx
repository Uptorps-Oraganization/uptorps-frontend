import { AuthStateCheckLoader } from "@/components/PageComponents/sharedcomponents/AuthStateCheckLoader";
import { useAuthState } from "@/contexthandlers/AuthContextProvider";
import { Outlet } from "react-router";

export const ProtectedRoutes = () => {
  const { user, isLoading } = useAuthState();

  console.log("Debug Auth State:", { user, isLoading });

  if (isLoading) {
    return <AuthStateCheckLoader />;
  }

  /*   if (user instanceof AxiosError || null) {
    console.log("Auth failed or error encountered. Redirecting to signin...");
    return <Navigate to="/auth/signin" replace />;
  } */

  return <Outlet />;
};
