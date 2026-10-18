/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type StatType = {
  title: string;
  figure: string;
  trend: string;
  trendicon: any;
  overallcomment: string;
};

export const AccountUserStatCard = (props: StatType) => {
  const FieldIcon = props.trendicon;

  return (
    <>
      <Card>
        <CardHeader>
          <CardDescription>{props.title}</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">{props.figure}</CardTitle>
          <CardAction>
            <Badge variant="secondary" className="py-3">
              <FieldIcon className="size-6" />
              {props.trend}
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-green-500 tabular-nums">{props.overallcomment}</div>
        </CardFooter>
      </Card>
    </>
  );
};
