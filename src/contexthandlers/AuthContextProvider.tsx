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
    return (
      <>
        <div className="fixed inset-0 flex flex-col items-center justify-center">
          <Spinner className="size-6 md:size-8 lg:size-10" />

          <section className="mt-4">
            <h1 className="text-sm md:text-[16px] lg:text-[18px] font-bold text-primary">Checking authentication state.....</h1>
          </section>
        </div>
      </>
    );
  }

  return <AuthContext.Provider value={{ user, accessToken: currentAccessToken, setAccessToken }}>{children}</AuthContext.Provider>;
};

export const useAuthState = () => useContext(AuthContext);
