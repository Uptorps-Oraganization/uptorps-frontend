import type { SignUpDataType } from "@/typesninterfaces/DataTypes";
import { SubmitHandler } from "react-hook-form";



export const SignIn = () => {
  const handleSignInSubmi: SubmitHandler<SignUpDataType> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form></form>
    </div>
  );
};
