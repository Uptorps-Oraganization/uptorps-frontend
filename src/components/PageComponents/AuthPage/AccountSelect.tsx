/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { AccountSelectType } from "@/typesnschemas/types/DataTypes";
import { MousePointerClick } from "lucide-react";
import { useController } from "react-hook-form";

export const AccountSelect = ({ control, errors }: AccountSelectType) => {
  const { field } = useController({
    name: "accounttype",
    control,
  });

  return (
    <>
      <Label htmlFor={field.value == "learner" ? "learner" : "tutor"} className="inline-flex text-[14px] mb-3">
        <MousePointerClick className="w-5 h-5" />
        Select Account Type
      </Label>
      <RadioGroup id="accounttype" value={field.value} onValueChange={field.onChange} className="flex flex-row justify-center items-center mb-3" disabled>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="learner" id="learner" />
          <Label htmlFor="learner">Learner Account</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="tutor" id="tutor" />
          <Label htmlFor="tutor">Tutor Account</Label>
        </div>
      </RadioGroup>

      {errors?.accounttype && <p className="text-xs text-destructive">{errors?.accounttype?.message as string}</p>}
    </>
  );
};
