/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useConfigSelectChoiceData } from "@/hooks/useConfigSelectionData";
import type { QuizConfigSelectionType, QuizConfigType } from "@/typesnschemas/types/DataTypes";
import { useController } from "react-hook-form";

export const QuizConfigSelection = (props: QuizConfigSelectionType) => {
  const { selectionData, setSelectedDifficulty, setSelectedLevel, setSelectedProgramme } = useConfigSelectChoiceData(props.name as QuizConfigType);

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name: props.name,
    control: props.control,
  });

  return (
    <>
      <Field>
        <Label htmlFor={props.name} className="after:content-['*'] after:text-destructive after:font-bold">
          {props.label}
        </Label>

        <Select id={props.name} value={(value as string) || ""} onValueChange={onChange} items={selectionData}>
          <SelectTrigger>
            <SelectValue className="text-[13px]! font-semibold" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {selectionData?.map((item: any) => {
                const onSelect =
                  props.name === "difficulty" ? setSelectedDifficulty : props.name === "level" ? setSelectedLevel : props.name === "programme" ? setSelectedProgramme : undefined;

                return (
                  <SelectItem key={item.value} value={item.value} onClick={() => onSelect?.(item.value)}>
                    {item.label}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>

        {error && <p className="text-[12px] font-medium text-destructive">{error.message}</p>}
      </Field>
    </>
  );
};

const timingSet = [
  { label: "10 Minutes", value: 10 },
  { label: "20 Minutes", value: 20 },
  { label: "30 Minutes", value: 30 },
  { label: "60 Munites", value: 60 },
];

export const QuizTimingSelection = (props: QuizConfigSelectionType) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name: props.name,
    control: props.control,
  });

  return (
    <>
      <Field>
        <Label htmlFor={props.name} className="after:content-['*'] after:text-destructive after:font-bold">
          {props.label}
        </Label>
        <Select id={props.name} value={value as number} onValueChange={onChange} items={timingSet}>
          <SelectTrigger>
            <SelectValue className="text-[13px]! font-semibold" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {timingSet.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {error && <p className="text-[12px] font-medium text-destructive">{error.message}</p>}
      </Field>
    </>
  );
};

export const QuizCostSelection = (props: QuizConfigSelectionType) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name: props.name,
    control: props.control,
  });

  return (
    <>
      <Field>
        <Label htmlFor={props.name} className="after:content-['*'] after:text-destructive after:font-bold">
          {props.label}
        </Label>
        <RadioGroup id={props.name} value={value as boolean} onValueChange={onChange} className="flex flex-row justify-center items-center gap-10">
          <div className="flex items-center gap-3">
            <RadioGroupItem value={false} id="free" />
            <Label htmlFor="free">Free Quiz</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value={true} id="paid" />
            <Label htmlFor="paid">Paid Quiz</Label>
          </div>
        </RadioGroup>

        {error && <p className="text-[12px] font-medium text-destructive">{error.message}</p>}
      </Field>
    </>
  );
};
