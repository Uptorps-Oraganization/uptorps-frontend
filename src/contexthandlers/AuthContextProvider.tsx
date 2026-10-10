/* eslint-disable react-refresh/only-export-components */
import { api, requestInterceptor } from "@/api/mainapisetup";
import { Spinner } from "@/components/ui/spinner";
import { useAuthQuery } from "@/hooks/useAuthQuery";
import type { AuthContextType } from "@/typesnschemas/types/DataTypes";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, error } = useAuthQuery();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const user = error ?? data?.user ?? null;
  const currentAccessToken = accessToken ?? data?.accessToken ?? null;

  useEffect(() => {
    requestInterceptor(currentAccessToken);

    return () => api.interceptors.request.eject(requestInterceptor(currentAccessToken));
  }, [currentAccessToken]);

  if (isLoading) {
    return <Spinner />;
  }

  return <AuthContext.Provider value={{ user, accessToken: currentAccessToken, setAccessToken }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
