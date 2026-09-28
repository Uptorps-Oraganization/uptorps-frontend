/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { EyeClosed, EyeIcon, KeyRound } from "lucide-react";
import { useState } from "react";
import type { FieldErrors } from "react-hook-form";

type PassInputType = {
  fieldname: "password" | "confirmpassword";
  register: any;
  errors: FieldErrors;
};

export const PasswordInputField = (props: PassInputType) => {
  const [showstate, setShowState] = useState<boolean>(false);

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
          <KeyRound />
        </InputGroupAddon>
        <InputGroupAddon onClick={() => setShowState((prev) => !prev)} className="pointer-events-auto cursor-pointer" align="inline-end">
          {showstate ? <EyeClosed /> : <EyeIcon />}
        </InputGroupAddon>
        <InputGroupInput
          id={props.fieldname}
          {...props.register(props.fieldname)}
          type={showstate ? "text" : "password"}
          className="text-[14px]! text-primary"
          placeholder={props.fieldname == "password" ? "Enter your password" : "Enter your password again"}
        />
      </InputGroup>
      {props.errors[props.fieldname] && <p className="text-xs text-destructive">{props.errors[props.fieldname]?.message as string}</p>}
    </>
  );
};
