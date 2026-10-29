import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SquarePenIcon } from "@/components/ui/square-pen-icon";
import { useQuestionPageStore } from "@/statemanagers/adminpagestate/QuestionPageStore";
import { Trash2Icon } from "@animateicons/react/lucide";

export const QuizQuestionAnswerCard = () => {
  const { setAnswerEditOpen, setAnswerDeleteOpen } = useQuestionPageStore();

  return (
    <>
      <Card className="w-full flex flex-row! justify-between items-center p-2 px-4">
        <span className="flex-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>

        <section className="flex flex-wrap gap-0">
          <Button onClick={setAnswerEditOpen} className="text-amber-500" variant="ghost">
            <SquarePenIcon />
          </Button>

          <Button onClick={setAnswerDeleteOpen} className="text-destructive" variant="ghost">
            <Trash2Icon />
          </Button>
        </section>
      </Card>
    </>
  );
};
