import { useQuizConfigDisplayContext } from "@/contexthandlers/QuizConfigDisplayProvider";
import { useQuizConfigSelectionContext } from "@/contexthandlers/QuizConfigSelectionProvider";
import { quizConfigurationData } from "@/lib/data";
import type { QuizConfigType } from "@/typesnschemas/types/DataTypes";

export const useConfigItemChoiceData = () => {
  const { configQueryData, clearConfigQueryData, setselectedConfiguration } = useQuizConfigDisplayContext();

  const configItemData = (() => {
    const { difficulty, level, programme } = configQueryData;

    if (difficulty && level && programme) {
      const refinedData = quizConfigurationData
        .find(({ difficulty: diff }) => diff === difficulty)
        ?.levels.find(({ level: lvl }) => lvl === level)
        ?.programmes.find(({ programme: prog }) => prog === programme)?.courses;

      return refinedData ?? [];
    }

    if (difficulty && level) {
      const refinedData = quizConfigurationData
        .find(({ difficulty: diff }) => diff === difficulty)
        ?.levels.find(({ level: lvl }) => lvl === level)?.programmes;

      return refinedData ?? [];
    }

    if (difficulty) {
      const refinedData = quizConfigurationData.find(({ difficulty: diff }) => diff === difficulty)?.levels;
      return refinedData ?? [];
    }

    return quizConfigurationData;
  })();

  return { configItemData, configQueryData, clearConfigQueryData, setselectedConfiguration };
};

export const useConfigSelectChoiceData = (configType: QuizConfigType) => {
  const { selectedDifficulty, selectedLevel, selectedProgramme, setSelectedDifficulty, setSelectedLevel, setSelectedProgramme } = useQuizConfigSelectionContext();

  const selectionData = (() => {
    const refinedData = (value: string) => ({ label: value, value });

    if (configType === "difficulty") {
      return quizConfigurationData.map(({ difficulty }) => refinedData(difficulty));
    }

    const difficultyData = quizConfigurationData.find(({ difficulty }) => difficulty === selectedDifficulty);
    const levelData = difficultyData?.levels.find(({ level }) => level === selectedLevel);
    const programmeData = levelData?.programmes.find(({ programme }) => programme === selectedProgramme);

    if (configType === "level") {
      return difficultyData?.levels.map(({ level }) => refinedData(level)) ?? [];
    }

    if (configType === "programme") {
      return levelData?.programmes.map(({ programme }) => refinedData(programme)) ?? [];
    }

    if (configType === "course") {
      return programmeData?.courses.map(refinedData) ?? [];
    }
  })();

  return { selectionData, setSelectedDifficulty, setSelectedLevel, setSelectedProgramme };
};
