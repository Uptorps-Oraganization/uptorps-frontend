/* eslint-disable react-refresh/only-export-components */
import type { QuizConfigSelectionProviderType } from "@/typesnschemas/types/DataTypes";
import { createContext, useContext, useState, type ReactNode } from "react";

const QuizConfigSelectionContext = createContext<QuizConfigSelectionProviderType | null>(null);

export const QuizConfigSelectionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedProgramme, setSelectedProgramme] = useState("");

  const value = {
    selectedDifficulty,
    selectedLevel,
    selectedProgramme,

    setSelectedDifficulty,
    setSelectedLevel,
    setSelectedProgramme,
  };

  return (
    <>
      <QuizConfigSelectionContext.Provider value={value}>{children}</QuizConfigSelectionContext.Provider>
    </>
  );
};

export const useQuizConfigSelectionContext = () => {
  const context = useContext(QuizConfigSelectionContext);
  if (!context) throw new Error("useQuizConfigSelectionContext must be used within an QuizConfigSelectionProvider");
  return context;
};
