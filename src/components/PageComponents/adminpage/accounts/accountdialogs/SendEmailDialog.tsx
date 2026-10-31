import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { useAccountStore } from "@/statemanagers/adminpagestate/AccountStore";
import { sendEmailSchema, type SendEmailType } from "@/typesnschemas/schemas/AccountSchema";
import { XIcon } from "@animateicons/react/lucide";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

export const SendEmailDialog = () => {
  const { setSendEmailOpen } = useAccountStore();

  const [submitLoading, setSubmitLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SendEmailType>({
    resolver: zodResolver(sendEmailSchema),
  });

  const handleQuestionCreation: SubmitHandler<SendEmailType> = (data) => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log(data);
      setSubmitLoading(false);

      // Show Toast For SuccessFul Question Edit();
    }, 1000);
  };

  return (
    <>
      <Dialog open>
        <form id="send-email-form" onSubmit={handleSubmit(handleQuestionCreation)}>
          <DialogContent className="max-w-110!" showCloseButton={false}>
            <Button onClick={setSendEmailOpen} className="absolute top-1 right-1" variant="ghost">
              <XIcon />
            </Button>

            <DialogHeader className="text-green-400!">
              <DialogTitle>Send Email</DialogTitle>
              <DialogDescription>Send a message through mail to user</DialogDescription>
            </DialogHeader>

            <ScrollArea className="max-h-[80vh]">
              <FieldGroup className="gap-2!">
                <Field>
                  <Label htmlFor="title" className="after:content-['_*'] after:text-destructive after:font-bold">
                    Mail Title
                  </Label>
                  <Input id="title" {...register("title")} placeholder="Type title here....." />
                  {errors && <p className="text-[12px] font-medium text-destructive">{errors.title?.message}</p>}
                </Field>

                <Field>
                  <Label htmlFor="message" className="after:content-['_*'] after:text-destructive after:font-bold">
                    Mail Message
                  </Label>
                  <Textarea id="message" {...register("message")} placeholder="Type message here....." />
                  {errors && <p className="text-[12px] font-medium text-destructive">{errors.message?.message}</p>}
                </Field>
              </FieldGroup>
            </ScrollArea>

            <DialogFooter className="justify-center!">
              <Button type="submit" form="send-email-form" className="px-6 h-10 min-w-50">
                {submitLoading && <Spinner />}
                Send Email
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};
