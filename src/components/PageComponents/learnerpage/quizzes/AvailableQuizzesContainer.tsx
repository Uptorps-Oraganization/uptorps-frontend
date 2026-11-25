import { Button } from "@/components/ui/button";
import { availableQuizzes } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { AvailableQuizzesCard } from "./AvailableQuizzesCard";

export const AvailableQuizzesContainer = () => {
  const [currentAvailableQuizGroupIndex, setCurrentAvailableQuizGroupIndex] = useState(0);

  const groupTotalAvailableQuizzes = Math.ceil(availableQuizzes.length / 6);

  const nextSet = () => {
    const finalIndex = currentAvailableQuizGroupIndex < groupTotalAvailableQuizzes - 1 ? currentAvailableQuizGroupIndex + 1 : 0;

    setCurrentAvailableQuizGroupIndex(finalIndex);
  };

  const prevSet = () => {
    const finalIndex = currentAvailableQuizGroupIndex > 0 ? currentAvailableQuizGroupIndex - 1 : groupTotalAvailableQuizzes - 1;

    setCurrentAvailableQuizGroupIndex(finalIndex);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-2 pt-2">
        {availableQuizzes.map(
          ({ title, description, timing, numbOfQuestions }, index) =>
            Math.floor(index / 6) === currentAvailableQuizGroupIndex && (
              <AvailableQuizzesCard key={index} title={title} description={description} timing={timing} numbOfQuestions={numbOfQuestions} />
            ),
        )}
      </div>

      <div className="flex flex-row justify-center items-center pt-2">
        <Button onClick={() => prevSet()} variant={"ghost"} className={"font-semibold"}>
          <ChevronLeft />
          Previous
        </Button>

        <article className="flex flex-row justify-center items-center mx-4 space-x-2">
          {Array.from({ length: groupTotalAvailableQuizzes }, (_, index) => (
            <span
              key={index}
              onClick={() => setCurrentAvailableQuizGroupIndex(index)}
              className={`${index === currentAvailableQuizGroupIndex ? "w-6 bg-green-500" : "w-2 bg-primary cursor-pointer"}  h-2 transition-[width] duration-500 rounded-full`}
            ></span>
          ))}
        </article>

        <Button onClick={() => nextSet()} variant={"ghost"} className={"font-semibold"}>
          Next
          <ChevronRight />
        </Button>
      </div>
    </>
  );
};
