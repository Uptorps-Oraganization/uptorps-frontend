import { AuthStateCheckLoader } from "@/components/PageComponents/sharedcomponents/AuthStateCheckLoader";
import { useAuthState } from "@/contexthandlers/AuthContextProvider";
import { Navigate, Outlet } from "react-router";

export const ProtectedRoutes = () => {
  const { user, isLoading } = useAuthState();

  if (isLoading) {
    return <AuthStateCheckLoader />;
  }

  return user ? <Outlet /> : <Navigate to="/auth/signin" replace />;
};
