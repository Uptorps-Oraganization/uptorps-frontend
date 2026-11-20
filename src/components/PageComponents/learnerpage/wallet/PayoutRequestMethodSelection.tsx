import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Controller } from "react-hook-form";

const payment_methods = [
  { label: "Mobile Money", value: "mobile_money" },
  { label: "Bank Transfer", value: "bank_transfer" },
];

const bank_provider = [
  { label: "GCB Bank", value: "gcb_bank" },
  { label: "Ecobank Ghana", value: "ecobank_ghana" },
  { label: "Absa Bank Ghana", value: "absa_bank_ghana" },
  { label: "Stanbic Bank Ghana", value: "stanbic_bank_ghana" },
];

const mobile_money_provider = [
  { label: "MTN Mobile Money", value: "mtn_mobile_money" },
  { label: "Telecel Cash", value: "telecel_cash" },
  { label: "AT Money", value: "at_money" },
];

export const PayoutRequestMethodSelection = (props: any) => {
  const [methodChange, setMethodChange] = useState<"mobile_money" | "bank_transfer" | null>(null);

  const resetPayoutFields = () => {
    props.control.unregister(["provider", "detial"]);
  };

  return (
    <>
      <Field>
        <Label htmlFor="method" className="after:content-['_*'] after:text-destructive after:font-bold">
          Payout Method
        </Label>

        <Controller
          name="method"
          control={props.control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Select
                id="method"
                value={field.value || ""}
                onValueChange={(value) => {
                  resetPayoutFields();
                  field.onChange(value);
                  setMethodChange(value);
                }}
                items={payment_methods}
              >
                <SelectTrigger>
                  <SelectValue className="text-[13px]! font-semibold" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {payment_methods.map((item: any) => {
                      return (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {error && <p className="text-[12px] font-medium text-destructive">{error.message}</p>}
            </>
          )}
        />
      </Field>

      {methodChange === "bank_transfer" && (
        <PayoutProviderTypeSelection key="bank_transfer" type={"bank_transfer"} control={props.control} providerData={bank_provider} />
      )}
      {methodChange === "mobile_money" && (
        <PayoutProviderTypeSelection key="mobile_money" type={"mobile_money"} control={props.control} providerData={mobile_money_provider} />
      )}
    </>
  );
};

const PayoutProviderTypeSelection = (props: any) => {
  return (
    <>
      <Field>
        <Label htmlFor="provider" className="after:content-['_*'] after:text-destructive after:font-bold">
          Payout Provider
        </Label>

        <Controller
          name="provider"
          control={props.control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Select id="provider" value={field.value || ""} onValueChange={field.onChange} items={props.providerData}>
                <SelectTrigger>
                  <SelectValue className="text-[13px]! font-semibold" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {props.providerData?.map((item: any) => {
                      return (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {error && <p className="text-[12px] font-medium text-destructive">{error.message}</p>}
            </>
          )}
        />
      </Field>

      <Field>
        <Label htmlFor="details" className="after:content-['_*'] after:text-destructive after:font-bold">
          Payout Details
        </Label>
        <Controller
          name="detial"
          control={props.control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Input
                id="details"
                value={field.value || ""}
                onChange={field.onChange}
                type="text"
                min={1}
                placeholder={props.type === "bank_transfer" ? "Enter your bank account number" : "Enter your phone number"}
              />
              {error && <p className="text-[12px] font-medium text-destructive">{error.message}</p>}
            </>
          )}
        />
      </Field>
    </>
  );
};
