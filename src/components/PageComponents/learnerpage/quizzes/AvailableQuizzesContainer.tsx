import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { AvailableQuizzesCard } from "./AvailableQuizzesCard";

const availableQuizzes = [
  { title: "Algebra Basics", description: "Practice foundational algebra concepts and equations.", timing: 15, numbOfQuestions: 10 },
  { title: "World History", description: "Review key events and civilizations from world history.", timing: 20, numbOfQuestions: 15 },
  { title: "Cell Biology", description: "Test your knowledge of cells and their functions.", timing: 15, numbOfQuestions: 10 },
  { title: "Essay Writing", description: "Explore the essentials of clear, effective essay writing.", timing: 20, numbOfQuestions: 12 },
  { title: "Geometry", description: "Solve problems involving shapes, angles, and measurement.", timing: 15, numbOfQuestions: 10 },
  { title: "Physics", description: "Review core principles of motion, forces, and energy.", timing: 20, numbOfQuestions: 15 },
  { title: "Literature", description: "Show what you know about literary works and techniques.", timing: 15, numbOfQuestions: 10 },
  { title: "Chemistry", description: "Practice concepts related to matter and chemical reactions.", timing: 20, numbOfQuestions: 15 },
  { title: "Geography", description: "Test your knowledge of places, maps, and environments.", timing: 15, numbOfQuestions: 10 },
  { title: "Grammar", description: "Review grammar rules, punctuation, and sentence structure.", timing: 10, numbOfQuestions: 10 },
  { title: "Computer Science", description: "Explore fundamental computing and programming concepts.", timing: 20, numbOfQuestions: 15 },
  { title: "Economics", description: "Review basic economic ideas, markets, and choices.", timing: 15, numbOfQuestions: 10 },
  { title: "Art History", description: "Identify influential periods, artists, and works of art.", timing: 15, numbOfQuestions: 10 },
]; //temporal Data

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
