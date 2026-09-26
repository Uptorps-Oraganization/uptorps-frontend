import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, User, UserPlus } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { PasswordInputField } from "./components/PasswordInputField";

const signupdataSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 letters long"),
    email: z.email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmpassword: z.string().min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"],
  });

export type SignUpDataType = z.infer<typeof signupdataSchema>;

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpDataType>({
    resolver: zodResolver(signupdataSchema),
  });

  const handleSignUpSubmit: SubmitHandler<SignUpDataType> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center text-primary space-y-6">
      <p className="font-bold text-4xl ">Create a new account</p>
      <form onSubmit={handleSubmit(handleSignUpSubmit)} className="flex flex-col w-85 text-primary space-y-1">
        <Label htmlFor="username" className="text-[14px]">
          Username
        </Label>

        <InputGroup id="username">
          <InputGroupAddon align="inline-end">
            <User />
          </InputGroupAddon>
          <InputGroupInput {...register("username")} type="text" className="text-[14px]! text-primary" placeholder="Enter your username" />
        </InputGroup>

        {errors?.username && <p className="text-xs text-destructive">{errors?.username?.message}</p>}

        <Label htmlFor="email" className="text-[14px]">
          Email
        </Label>

        <InputGroup id="email">
          <InputGroupAddon align="inline-end">
            <Mail />
          </InputGroupAddon>
          <InputGroupInput {...register("email")} type="email" className="text-[14px]! text-primary" placeholder="Enter your email" />
        </InputGroup>

        {errors?.email && <p className="text-xs text-destructive">{errors?.email?.message}</p>}

        <Label htmlFor="password" className="text-[14px]">
          Password
        </Label>

        <PasswordInputField fieldname="password" register={register} />
        {errors?.password && <p className="text-xs text-destructive">{errors?.password?.message}</p>}

        <Label htmlFor="confirmpassword" className="text-[14px]">
          Confirm Password
        </Label>

        <PasswordInputField fieldname="confirmpassword" register={register} />
        {errors?.confirmpassword && <p className="text-xs text-destructive">{errors?.confirmpassword?.message}</p>}

        <Button type="submit" className="w-80 h-10 mt-6 flex flex-row self-center items-center gap-4 text-[15px] bg-green-600 text-primary-foreground hover:text-secondary">
          <UserPlus size={12} />
          Create Account
        </Button>
      </form>
    </div>
  );
};
