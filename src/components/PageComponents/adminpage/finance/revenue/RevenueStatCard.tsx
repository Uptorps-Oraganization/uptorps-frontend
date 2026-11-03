import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatAmountWithAsCurrency } from "@/lib/utils";

/* eslint-disable @typescript-eslint/no-explicit-any */
type StatType = {
  title: string;
  amount: number;
  trend?: string;
  trendicon: any;
  overallcomment?: string;
};

export const RevenueStatCard = (props: StatType) => {
  const FieldIcon = props.trendicon;

  return (
    <>
      <Card>
        <CardHeader>
          <CardDescription>{props.title}</CardDescription>
          <CardTitle className="text-3xl font-semibold tabular-nums">{formatAmountWithAsCurrency(props.amount)}</CardTitle>
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
