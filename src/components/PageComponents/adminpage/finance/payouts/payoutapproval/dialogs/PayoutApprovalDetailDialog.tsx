import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { hubtellogo } from "@/lib/assets";
import { formatAmountWithCurrencySymbol } from "@/lib/utils";
import { usePayoutApprovalStore } from "@/statemanagers/adminpagestore/PayoutStore";
import { XIcon } from "@animateicons/react/lucide";

export const PayoutApprovalDetailDialog = () => {
  const { setShowApprovedPayoutDetailsDialog } = usePayoutApprovalStore();

  return (
    <>
      <Dialog open>
        <DialogContent className="max-w-110!" showCloseButton={false}>
          <Button onClick={setShowApprovedPayoutDetailsDialog} className="absolute top-1 right-1" variant="ghost">
            <XIcon />
          </Button>

          <DialogHeader className="text-green-500!">
            <DialogTitle>Approved Payout Details</DialogTitle>
            <DialogDescription>Full details of the approved payout</DialogDescription>
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
              <span className="text-sm">{formatAmountWithCurrencySymbol(300)}</span>
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
              <span className="text-xs font-bold">DATE APPROVED</span>
              <span className="text-sm">2026-11-23</span>
            </Field>

            <Field className="w-fit">
              <span className="text-xs font-bold">TRANSACTION STATUS</span>
              <Badge className="badge_in_table text-green-500 bg-green-500/10">SUCCESSFUL</Badge>
            </Field>
          </FieldGroup>
        </DialogContent>
      </Dialog>
    </>
  );
};
