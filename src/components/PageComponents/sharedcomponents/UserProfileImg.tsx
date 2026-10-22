/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserProfileImg = ({ size, borderStyle, headerImgUrl, altText }: any) => {
  return (
    <Avatar className={size}>
      <AvatarImage className={borderStyle} src={headerImgUrl} />
      <AvatarFallback>{altText}</AvatarFallback>
    </Avatar>
  );
};
