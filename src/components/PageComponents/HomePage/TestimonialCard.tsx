import { Card, CardFooter } from "@/components/ui/card";
import type { TestimonialDataType } from "@/typesnschemas/types/DataTypes";
import { Quote, Star } from "lucide-react";

export const TestimonialCard = ({ statement, user_name, user_type, ratings }: TestimonialDataType) => {
  return (
    <Card className="w-full md:w-10/12 lg:w-8/12 bg-green-500 text-primary-foreground flex flex-col justify-center items-start p-10 space-x-0">
      <Quote className="text-primary-foreground fill-primary-foreground" size={35} />

      <p className="text-[18px] italic">{statement}</p>

      <CardFooter className="w-full flex justify-between border-primary-foreground">
        <section className="flex flex-col">
          <span className="font-bold text-[20px]">{user_name}</span>
          <span className="font-light italic text-[14px]">{user_type}</span>
        </section>
        <section className="flex flex-row space-x-1">
          {Array.from({ length: 5 }, (_, index) => (
            <Star key={index} className={`${index + 1 <= ratings ? "fill-primary-foreground" : ""} `} size={18} />
          ))}
        </section>
      </CardFooter>
    </Card>
  );
};
