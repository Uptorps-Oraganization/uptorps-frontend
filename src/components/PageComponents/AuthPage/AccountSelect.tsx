/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useController } from "react-hook-form";

type AccountSelectType = {
  control: any;
};

export const AccountSelect = ({ control }: AccountSelectType) => {
  const { field } = useController({
    name: "accounttype",
    control,
  });

  return (
    <>
      <RadioGroup value={field.value} onValueChange={field.onChange} className="flex flex-row justify-center items-center mb-3" disabled>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="learner" id="learner" />
          <Label htmlFor="learner">Learner Account</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="tutor" id="tutor" />
          <Label htmlFor="tutor">Tutor Account</Label>
        </div>
      </RadioGroup>
    </>
  );
};
