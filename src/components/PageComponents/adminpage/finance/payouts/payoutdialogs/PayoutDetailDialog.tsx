import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { hubtellogo } from "@/lib/assets";
import { formatAmountWithAsCurrency } from "@/lib/utils";
import { usePayoutStore } from "@/statemanagers/adminpagestate/PayoutStore";
import { XIcon } from "@animateicons/react/lucide";

export const PayoutDetailDialog = () => {
  const { setShowPayoutDetailsDialog } = usePayoutStore();

  return (
    <>
      <Dialog open>
        <DialogContent className="max-w-110!" showCloseButton={false}>
          <Button onClick={setShowPayoutDetailsDialog} className="absolute top-1 right-1" variant="ghost">
            <XIcon />
          </Button>

          <DialogHeader className="text-green-400!">
            <DialogTitle>Payout Request Details</DialogTitle>
            <DialogDescription>Full details of the payout request</DialogDescription>
          </DialogHeader>

          <FieldGroup className="gap-2!">
            <Field>
              <span className="text-xs font-bold">USERNAME</span>
              <span className="text-sm">Kweku Boateng</span>
            </Field>

            <Field>
              <span className="text-xs font-bold">USER EMAIL</span>
              <span className="text-sm">kwekuaboagye@gmail.com</span>
            </Field>

            <Field>
              <span className="text-xs font-bold">PAYOUT ID</span>
              <span className="text-sm">asdadasd_1332da_r2u39</span>
            </Field>

            <Field>
              <span className="text-xs font-bold">PAYOUT AMOUNT REQUESTED</span>
              <span className="text-sm">{formatAmountWithAsCurrency(300)}</span>
            </Field>

            <Field className="w-fit">
              <span className="text-xs font-bold">PAYOUT OPTION</span>
              <img className="size-5" src={hubtellogo} alt="payment_option_logo" />
            </Field>

            <Field className="w-fit">
              <span className="text-xs font-bold">PAYOUT METHOD</span>
              <span className="badge_in_table text-teal-500 bg-slate-500/10">MOBILE MONEY</span>
            </Field>

            <Field>
              <span className="text-xs font-bold">PAYOUT DESTINATION</span>
              <span className="text-sm">233-XX-XXX-XXXX</span>
            </Field>

            <Field>
              <span className="text-xs font-bold">Date Requested</span>
              <span className="text-sm">2026-11-23</span>
            </Field>
          </FieldGroup>
        </DialogContent>
      </Dialog>
    </>
  );
};
