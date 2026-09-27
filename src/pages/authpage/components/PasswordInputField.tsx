import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { EyeClosed, EyeIcon, KeyRound } from "lucide-react";
import { useState } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { SignUpDataType } from "../Signup";

type PassInputType = {
  fieldname: "password" | "confirmpassword";
  register: UseFormRegister<SignUpDataType>;
};

export const PasswordInputField = ({ fieldname, register }: PassInputType) => {
  const [showstate, setShowState] = useState<boolean>(false);

  return (
    <>
      <InputGroup id={fieldname}>
        <InputGroupAddon align="inline-end">
          <KeyRound />
        </InputGroupAddon>
        <InputGroupAddon onClick={() => setShowState((prev) => !prev)} className="pointer-events-auto cursor-pointer" align="inline-end">
          {showstate ? <EyeClosed /> : <EyeIcon />}
        </InputGroupAddon>
        <InputGroupInput
          {...register(fieldname)}
          type={showstate ? "text" : "password"}
          className="text-[14px]! text-primary"
          placeholder={fieldname == "password" ? "Enter your password" : "Enter your password again"}
        />
      </InputGroup>
    </>
  );
};
