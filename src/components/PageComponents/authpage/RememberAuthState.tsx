import { useAuthState } from "@/contexthandlers/AuthContextProvider";
import { AxiosError } from "axios";
import { Navigate, Outlet } from "react-router";
import { AuthStateCheckLoader } from "../sharedcomponents/AuthStateCheckLoader";

export const RememberAuthState = () => {
  const { user, isLoading } = useAuthState();

  if (isLoading) {
    return <AuthStateCheckLoader />;
  }

  if (user instanceof AxiosError || null) {
    return <Outlet />;
  }

  return <Navigate to="/userpage/learneractionpage/dashboard" replace />;
};
