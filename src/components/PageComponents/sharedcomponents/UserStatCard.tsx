/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatFigureAsRaw } from "@/lib/utils";

export type StatType = {
  title: string;
  figure: number;
  trend?: string;
  trendicon?: any;
  overallcomment?: string;
};

export const UserStatCard = (props: StatType) => {
  const FieldIcon = props.trendicon;

  return (
    <>
      <Card>
        <CardHeader>
          <CardDescription>{props.title}</CardDescription>
          <CardTitle className="text-3xl font-semibold tabular-nums">{formatFigureAsRaw(props.figure)}</CardTitle>
          <CardAction>
            <Badge variant="secondary" className="font-semibold py-3">
              <FieldIcon className="size-4" />
              {props.trend}
            </Badge>
          </CardAction>
        </CardHeader>

        {props.overallcomment && (
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="text-green-500">{props.overallcomment}</div>
          </CardFooter>
        )}
      </Card>
    </>
  );
};
