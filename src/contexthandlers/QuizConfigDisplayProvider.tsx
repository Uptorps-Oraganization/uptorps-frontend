/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";

type QuizConfigDisplayProviderType = {
  selectedConfiguration: number;
  setselectedConfiguration: (selectedConfig: number) => void;

  configQueryData: Record<string, string>;
  setconfigQueryData: (data: Record<string, string>) => void;
  clearConfigQueryData: () => void;
};

const QuizConfigDisplayContext = createContext<QuizConfigDisplayProviderType | null>(null);

export const QuizConfigDisplayProvider = ({ children }: { children: ReactNode }) => {
  const [selectedConfiguration, setSelectedConfiguration] = useState(0);
  const [configQueryData, setConfigQueryData] = useState<Record<string, string>>({});

  const setselectedConfiguration = (selectedConfig: number) => setSelectedConfiguration(selectedConfig);
  const setconfigQueryData = (data: Record<string, string>) => setConfigQueryData({ ...configQueryData, ...data });
  const clearConfigQueryData = () => setConfigQueryData({});

  const value = {
    selectedConfiguration,
    setselectedConfiguration,
    configQueryData,
    setconfigQueryData,
    clearConfigQueryData,
  };

  return <QuizConfigDisplayContext.Provider value={value}>{children}</QuizConfigDisplayContext.Provider>;
};

export const useQuizConfigDisplayContext = () => {
  const context = useContext(QuizConfigDisplayContext);
  if (!context) throw new Error("useQuizConfigDisplayContext must be used within an QuizConfigDisplayProvider");
  return context;
};
