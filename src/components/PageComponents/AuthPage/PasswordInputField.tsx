/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import type { PassInputType } from "@/typesnschemas/types/DataTypes";
import { EyeClosedIcon, EyeIcon } from "@animateicons/react/lucide";
import { KeyRound } from "lucide-react";
import { useState } from "react";

export const PasswordInputField = (props: PassInputType) => {
  const [showstate, setShowState] = useState<boolean>(false);

  return (
    <>
      <Label htmlFor={props.fieldname} className={`text-[13px] ${props.required && "after:content-['_*'] after:text-red-500 after:font-bold"}`}>
        {props.label}
      </Label>
      <InputGroup>
        <InputGroupAddon align="inline-end">
          <KeyRound />
        </InputGroupAddon>
        <InputGroupAddon onClick={() => setShowState((prev) => !prev)} className="pointer-events-auto cursor-pointer" align="inline-end">
          {showstate ? <EyeClosedIcon className={"text-green-500 cursor-pointer"} size={14} duration={1} /> : <EyeIcon className={"text-green-500 cursor-pointer"} size={14} duration={1} />}
        </InputGroupAddon>
        <InputGroupInput id={props.fieldname} {...props.register(props.fieldname)} type={showstate ? "text" : "password"} className="text-[14px]! text-primary" placeholder={props.placeholder} />
      </InputGroup>
      {props.errors[props.fieldname] && <p className="text-xs text-destructive">{props.errors[props.fieldname]?.message as string}</p>}
    </>
  );
};
