import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Spinner } from "@/components/ui/spinner";
import { useLearnerWalletStore } from "@/statemanagers/learnerpagestore/LearnerWalletStore";
import { payoutSchema, type PayoutRequestType } from "@/typesnschemas/schemas/PayoutSchema";
import { XIcon } from "@animateicons/react/lucide";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { z } from "zod";
import { PayoutRequestMethodSelection } from "./PayoutRequestMethodSelection";

export const PayoutRequestDialog = () => {
  const { setPayoutRequestDialogShow } = useLearnerWalletStore();
  const [submitLoading, setSubmitLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.input<typeof payoutSchema>, any, PayoutRequestType>({
    resolver: zodResolver(payoutSchema),
    defaultValues: {
      amount: 50,
    },
  });

  const handlePayoutRequest: SubmitHandler<PayoutRequestType> = (data) => {
    setSubmitLoading(true);
    setTimeout(() => {
      console.log(data);
      setSubmitLoading(false);
    }, 1000);
  };

  return (
    <>
      <Dialog open>
        <form id="payout-request-form" onSubmit={handleSubmit(handlePayoutRequest)}>
          <DialogContent className="max-w-90!" showCloseButton={false}>
            <Button onClick={setPayoutRequestDialogShow} className="absolute top-1 right-1" variant="ghost">
              <XIcon />
            </Button>

            <DialogHeader className="text-green-500!">
              <DialogTitle>Payout Request</DialogTitle>
              <DialogDescription>Request a payout based on your account balance</DialogDescription>
            </DialogHeader>

            <ScrollArea className="max-h-[80vh]">
              <FieldGroup className="gap-2!">
                <Field>
                  <Label htmlFor="amount" className="after:content-['_*'] after:text-destructive after:font-bold">
                    Payout Amount
                  </Label>
                  <Input id="amount" {...register("amount", { valueAsNumber: true })} type="number" min={50} />
                  {errors && <p className="text-[12px] font-medium text-destructive">{errors.amount?.message}</p>}
                </Field>

                <PayoutRequestMethodSelection control={control} />
              </FieldGroup>
            </ScrollArea>

            <DialogFooter className="justify-center!">
              <Button type="submit" form="payout-request-form" className="px-6 h-10 min-w-50">
                {submitLoading && <Spinner />}
                Confirm Request
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};
