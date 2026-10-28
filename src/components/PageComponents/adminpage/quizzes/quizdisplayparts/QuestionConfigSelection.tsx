/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { AnswerCreationType, QuestionCreationType } from "@/typesnschemas/schemas/QuizSchema";
import { useController, type Control } from "react-hook-form";

type QuestionSelectionType = {
  label: string;
  name: "question" | "question_type";
  control: Control<QuestionCreationType, any, QuestionCreationType>;
};

const questionTypeSet = [
  { label: "Multiple Choice", value: "MC" },
  { label: "True or False", value: "TF" },
];

export const QuestionTypeSelection = (props: QuestionSelectionType) => {
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

        <Select id={props.name} value={value as string} onValueChange={onChange} items={questionTypeSet}>
          <SelectTrigger>
            <SelectValue className="text-[13px]! font-semibold" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {questionTypeSet.map((item) => (
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

type AnswerSelectionType = {
  label: string;
  name: "answer" | "is_correct";
  control: Control<AnswerCreationType, any, AnswerCreationType>;
};

const answerTypeSet = [
  { label: "True", value: true },
  { label: "False", value: false },
];

export const AnswerTypeSelection = (props: AnswerSelectionType) => {
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

        <Select id={props.name} value={value as string} onValueChange={onChange} items={answerTypeSet}>
          <SelectTrigger>
            <SelectValue className="text-[13px]! font-semibold" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {answerTypeSet.map((item) => (
                <SelectItem key={item.label} value={item.value}>
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
