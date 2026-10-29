import { Field } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { QuizConfigSelectionType } from "@/typesnschemas/types/DataTypes";
import { useController } from "react-hook-form";

const demoDifficulty = [
  { label: "Nursery", value: "nursery" },
  { label: "Basic", value: "basic" },
  { label: "Secondary", value: "secondary" },
  { label: "Tertiary", value: "tertiary" },
];

const demoLevel = [
  { label: "Level 1", value: "level_1" },
  { label: "Level 2", value: "level_2" },
  { label: "Level 3", value: "level_3" },
  { label: "Level 4", value: "level_4" },
];

const demoProgramme = [
  { label: "Arts", value: "arts" },
  { label: "History", value: "history" },
  { label: "Mathematics", value: "mathematics" },
  { label: "Science", value: "science" },
];

const demoCourse = [
  { label: "Dance", value: "dance" },
  { label: "War & Culture", value: "war_and_culture" },
  { label: "Algebra", value: "algebra" },
  { label: "Elements", value: "elements" },
];

export const QuizConfigSelection = (props: QuizConfigSelectionType) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name: props.name,
    control: props.control,
  });

  const demoData = props.configType == "difficulty" ? demoDifficulty : props.configType == "level" ? demoLevel : props.configType == "programme" ? demoProgramme : demoCourse;

  return (
    <>
      <Field>
        <Label htmlFor={props.name} className="after:content-['_*'] after:text-destructive after:font-bold">
          {props.label}
        </Label>

        <Select id={props.name} value={value as string} onValueChange={onChange} items={demoData}>
          <SelectTrigger>
            <SelectValue className="text-[13px]! font-semibold" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {demoData.map((item) => (
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
        <Label htmlFor={props.name} className="after:content-['_*'] after:text-destructive after:font-bold">
          {props.label}
        </Label>
        <Select id={props.name} value={value as string} onValueChange={onChange} items={timingSet}>
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
        <Label htmlFor={props.name} className="after:content-['_*'] after:text-destructive after:font-bold">
          {props.label}
        </Label>
        <RadioGroup id="accounttype" value={value as string} onValueChange={onChange} className="flex flex-row justify-center items-center gap-10">
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
