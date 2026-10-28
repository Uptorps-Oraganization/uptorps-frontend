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
import { SquarePenIcon } from "@/components/ui/square-pen-icon";
import { useQuizPageStore } from "@/statemanagers/adminpagestate/QuizPageStore";
import { EllipsisIcon, EyeIcon, Trash2Icon } from "@animateicons/react/lucide";
import { useNavigate } from "react-router";

export const QuizActionMenu = () => {
  const { setQuizDetailDialogOpen, setQuizEditDialogOpen, setQuizDeletionDialogOpen } = useQuizPageStore();

  const navigate = useNavigate();

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
        <DropdownMenuContent className="w-fit p-1">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Quiz Action</DropdownMenuLabel>

            <DropdownMenuItem onClick={setQuizDetailDialogOpen}>
              <EyeIcon className="size-4!" /> View Details
            </DropdownMenuItem>

            <DropdownMenuItem onClick={setQuizEditDialogOpen}>
              <SquarePenIcon className="size-4!" /> Edit Quiz
            </DropdownMenuItem>

            <DropdownMenuItem className="text-amber-400" onClick={() => navigate("/adminpage/configurations/quizzes/2d8d44d7-7c5d-4bd7-bf96-1f1d51547ce1")}>
              <EyeIcon className="size-4!" /> View Questions
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuItem variant="destructive" onClick={setQuizDeletionDialogOpen}>
            <Trash2Icon /> Delete Quiz
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
