import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useQuizPageStore } from "@/statemanagers/adminpagestate/QuizPageStore";
import { useIconHover } from "@animateicons/react";
import { ArrowUpRight, EllipsisIcon, EyeIcon, SquarePenIcon, Trash2Icon } from "@animateicons/react/lucide";
import { useNavigate } from "react-router";

const triggerConfig = [
  { icon: "viewDetail", trigger: "hover" },
  { icon: "editQuiz", trigger: "hover" },
  { icon: "viewQuestion", trigger: "hover" },
  { icon: "deleteQuiz", trigger: "hover" },
] as const;

export const QuizActionMenu = () => {
  const navigate = useNavigate();
  const { setQuizDetailDialogOpen, setQuizEditDialogOpen, setQuizDeletionDialogOpen } = useQuizPageStore();

  const {
    icon: { viewDetail, editQuiz, viewQuestion, deleteQuiz },
    trigger,
  } = useIconHover({ trigger: triggerConfig });

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button size="icon" variant="outline">
              <EllipsisIcon />
            </Button>
          }
        />
        <DropdownMenuContent className="w-fit">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Quiz Action</DropdownMenuLabel>

            <DropdownMenuItem onClick={setQuizDetailDialogOpen} {...trigger}>
              <EyeIcon className="size-4!" {...viewDetail} /> View Details
            </DropdownMenuItem>

            <DropdownMenuItem onClick={setQuizEditDialogOpen} {...trigger}>
              <SquarePenIcon className="size-4!" {...editQuiz} /> Edit Quiz
            </DropdownMenuItem>

            <DropdownMenuItem className="text-amber-400" onClick={() => navigate("/adminpage/configurations/quizzes/2d8d44d7-7c5d-4bd7-bf96-1f1d51547ce1")} {...trigger}>
              <ArrowUpRight className="size-4!" {...viewQuestion} /> Quiz Questions
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuItem variant="destructive" onClick={setQuizDeletionDialogOpen} {...trigger}>
            <Trash2Icon {...deleteQuiz} /> Delete Quiz
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
