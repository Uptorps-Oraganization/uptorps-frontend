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
import { EllipsisIcon, EyeIcon, Trash2Icon } from "@animateicons/react/lucide";
import { FilePlusCorner } from "lucide-react";

export const QuizActionMenu = () => {
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
            <DropdownMenuItem>
              <EyeIcon className="size-4!" /> View Details
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SquarePenIcon className="size-4!" /> Edit Quiz
            </DropdownMenuItem>

            <DropdownMenuItem className="text-green-400">
              <FilePlusCorner /> Add Question
            </DropdownMenuItem>

            <DropdownMenuItem className="text-amber-400">
              <EyeIcon className="size-4!" /> View Questions
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuItem variant="destructive">
            <Trash2Icon /> Delete Quiz
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
