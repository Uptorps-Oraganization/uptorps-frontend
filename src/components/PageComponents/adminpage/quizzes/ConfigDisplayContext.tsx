/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState, type ReactNode } from "react";

const DisplayContext = createContext<any>(null);

export const ConfigDisplayProvider = ({ children }: { children: ReactNode }) => {
  const [selectedConfiguration, setselectedConfiguration] = useState<number>(0);
  const [configQueryData, setConfigQueryData] = useState({});

  return (
    <>
      <DisplayContext.Provider value={{ selectedConfiguration, setselectedConfiguration, configQueryData, setConfigQueryData }}>{children}</DisplayContext.Provider>
    </>
  );
};

export const useDisplayContext = () => {
  const context = useContext(DisplayContext);

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
