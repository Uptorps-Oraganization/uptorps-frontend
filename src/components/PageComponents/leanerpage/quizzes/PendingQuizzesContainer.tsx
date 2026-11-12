import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { PendingQuizCard } from "./PendingQuizCard";

const pendingQuizzes = [
  <PendingQuizCard />,
  <PendingQuizCard />,
  <PendingQuizCard />,
  <PendingQuizCard />,
  <PendingQuizCard />,
  <PendingQuizCard />,
  <PendingQuizCard />,
  <PendingQuizCard />,
]; //temporal Data

export const PendingQuizzesContainer = () => {
  const [currentPendingQuizGroupIndex, setcurrentPendingQuizGroupIndex] = useState(0);

  const groupTotalPendingQuizzes = Math.ceil(pendingQuizzes.length / 3);

  const nextSet = () => {
    const finalIndex = currentPendingQuizGroupIndex < groupTotalPendingQuizzes - 1 ? currentPendingQuizGroupIndex + 1 : 0;

    setcurrentPendingQuizGroupIndex(finalIndex);
  };

  const prevSet = () => {
    const finalIndex = currentPendingQuizGroupIndex > 0 ? currentPendingQuizGroupIndex - 1 : groupTotalPendingQuizzes - 1;

    setcurrentPendingQuizGroupIndex(finalIndex);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-2 pt-2">
        {pendingQuizzes.map((pendQuiz, index) => {
          if (Math.floor(index / 3) == currentPendingQuizGroupIndex) return pendQuiz;
        })}
      </div>

      <div className="flex flex-row justify-center items-center pt-4">
        <Button onClick={() => prevSet()} size="icon-sm">
          <ChevronLeft />
        </Button>

        <article className="flex flex-row justify-center items-center mx-4 space-x-2">
          {Array.from({ length: groupTotalPendingQuizzes }, (_, index) => (
            <span
              key={index}
              className={`${index === currentPendingQuizGroupIndex ? "w-6 bg-green-500" : "w-2 bg-primary"}  h-2 transition-[width] duration-500 rounded-full`}
            ></span>
          ))}
        </article>

        <Button onClick={() => nextSet()} size="icon-sm">
          <ChevronRight />
        </Button>
      </div>
    </>
  );
};
