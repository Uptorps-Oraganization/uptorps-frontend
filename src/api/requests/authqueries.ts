import type { SignUpDataType } from "@/typesnschemas/schemas/AuthSchemas";
import { api } from "../mainapisetup";

export const registerUser = async (data: SignUpDataType) => {
  try {
    const response = await api.post("/accounts/register/", data);
    return { success: true, message: response.data.message };
  } catch (err) {
    return { success: false, message: err };
  }
};
