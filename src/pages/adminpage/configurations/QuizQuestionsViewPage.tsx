import { QuizQuestionCard } from "@/components/PageComponents/adminpage/quizzes/quizdisplayparts/QuizQuestionCard";
import { AnswerCreationDialog } from "@/components/PageComponents/adminpage/quizzes/quizquestiondialogs/AnswerCreationDialog";
import { AnswerDeleteDialog } from "@/components/PageComponents/adminpage/quizzes/quizquestiondialogs/AnswerDeleteDialog";
import { AnswerEditDialog } from "@/components/PageComponents/adminpage/quizzes/quizquestiondialogs/AnswerEditDialog";
import { QuestionCreationDialog } from "@/components/PageComponents/adminpage/quizzes/quizquestiondialogs/QuestionCreationDialog";
import { QuestionDeleteDialog } from "@/components/PageComponents/adminpage/quizzes/quizquestiondialogs/QuestionDeleteDialog";
import { QuestionEditDialog } from "@/components/PageComponents/adminpage/quizzes/quizquestiondialogs/QuestionEditDialog";
import { Button } from "@/components/ui/button";
import { useQuestionPageStore } from "@/statemanagers/adminpagestate/QuestionPageStore";
import { CirclePlusIcon, RefreshCw } from "lucide-react";
import { useParams } from "react-router";

export const AdminQuizQuestionsViewPage = () => {
  const { quizID } = useParams();
  const {
    questionCreationDialogOpen,
    questionEditOpen,
    questionDeleteOpen,
    answerCreationDialogOpen,
    answerEditOpen,
    answerDeleteOpen,
    setQuestionCreationDialogOpen,
  } = useQuestionPageStore();

  return (
    <>
      <div className="p-4">
        <h1 className="text-sm font-semibold">Quiz Title: Lucky Quiz</h1>
        <h1 className="text-sm font-semibold">Quiz ID: {quizID}</h1>

        <section className="pt-4 space-x-4">
          <Button onClick={setQuestionCreationDialogOpen} className="px-6 h-10 min-w-50">
            <CirclePlusIcon />
            Add New Question
          </Button>

          <Button className="px-6 h-10 min-w-50">
            <RefreshCw />
            Reload Questions
          </Button>
        </section>

        <section className="grid grid-cols-2 gap-2 pt-4">
          <QuizQuestionCard />
          <QuizQuestionCard />
        </section>
      </div>

      {questionCreationDialogOpen && <QuestionCreationDialog />}
      {questionEditOpen && <QuestionEditDialog />}
      {questionDeleteOpen && <QuestionDeleteDialog />}
      {answerCreationDialogOpen && <AnswerCreationDialog />}
      {answerEditOpen && <AnswerEditDialog />}
      {answerDeleteOpen && <AnswerDeleteDialog />}
    </>
  );
};
