import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Spinner } from "@/components/ui/spinner";
import { quizConfigNameSchema, type QuizConfigNameType } from "@/typesnschemas/schemas/QuizSchema";
import { XIcon } from "@animateicons/react/lucide";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

export const ConfigItemEditDialog = (props: any) => {
  const [submitLoading, setSubmitLoading] = useState(false);

  const type = props.type[0].toUpperCase() + props.type.slice(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuizConfigNameType>({
    resolver: zodResolver(quizConfigNameSchema),
  });

  const handleConfigEdit: SubmitHandler<QuizConfigNameType> = (data) => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log(data);
      setSubmitLoading(false);

      props.setConfigItemEditDialogOpen(false);

      // Show Toast For SuccessFul Question Edit();
    }, 1000);
  };

  return (
    <>
      <Dialog open>
        <form id="config-edit-form" onSubmit={handleSubmit(handleConfigEdit)} hidden>
          <DialogContent className="max-w-90!" showCloseButton={false}>
            <Button onClick={() => props.setConfigItemEditDialogOpen(false)} className="absolute top-1 right-1" variant="ghost">
              <XIcon />
            </Button>

            <DialogHeader className="text-green-500! py-2">
              <DialogTitle>Edit {type}</DialogTitle>
              <DialogDescription>Make changes to {props.name}</DialogDescription>
            </DialogHeader>

            <ScrollArea className="max-h-[80vh]">
              <FieldGroup className="gap-2!">
                <Field>
                  <Label htmlFor="currentname">Current {props.type} name</Label>
                  <Input id="currentname" value={props.name} disabled />
                </Field>

                <Field>
                  <Label htmlFor="newname" className="after:content-['_*'] after:text-destructive after:font-bold">
                    New {props.type} name
                  </Label>
                  <Input id="newname" {...register("name")} placeholder={`Type new ${props.type} name here.....`} />
                  {errors && <p className="text-[12px] font-medium text-destructive">{errors.name?.message}</p>}
                </Field>
              </FieldGroup>
            </ScrollArea>

            <DialogFooter className="justify-center!">
              <Button type="submit" form="config-edit-form" className="px-6 h-10 min-w-50">
                {submitLoading && <Spinner />}
                Save Changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};
