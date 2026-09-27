/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import type { LucideIcon } from "lucide-react";
import type { FieldErrors } from "react-hook-form";

type TextInputType = {
  type: string;
  fieldname: string;
  fieldicon: LucideIcon;
  register: any;
  placeholder: string;
  errors: FieldErrors;
};

export const TextInputField = (props: TextInputType) => {
  const FieldIcon = props.fieldicon;

  const capitalizeFirstLetter = (str: string) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <Label htmlFor={props.fieldname} className="text-[14px]">
        {capitalizeFirstLetter(props.fieldname)}
      </Label>
      <InputGroup>
        <InputGroupAddon align="inline-end">
          <FieldIcon className="size-4" />
        </InputGroupAddon>
        <InputGroupInput id={props.fieldname} {...props.register(props.fieldname)} type={props.type} className="text-[14px]! text-primary" placeholder={props.placeholder} />
      </InputGroup>
      {props.errors[props.fieldname] && <p className="text-xs text-destructive">{props.errors[props.fieldname]?.message as string}</p>}
    </>
  );
};
