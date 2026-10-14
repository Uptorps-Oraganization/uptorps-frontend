/* eslint-disable react-refresh/only-export-components */
import { useAuthQuery } from "@/hooks/useAuthQuery";
import type { AuthContextType } from "@/typesnschemas/types/DataTypes";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, error } = useAuthQuery();
  const [token, setAccessToken] = useState<string | null>(null);

  const user = error ?? data?.user ?? null;
  const accessToken = token ?? data?.access ?? null;

  const authStateValue: AuthContextType = {
    user,
    isLoading,
    accessToken,
    setAccessToken,
  };

  return <AuthContext.Provider value={authStateValue}>{children}</AuthContext.Provider>;
};

export const useAuthState = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuthState must be used within an AuthContextProvider");
  return context;
};
