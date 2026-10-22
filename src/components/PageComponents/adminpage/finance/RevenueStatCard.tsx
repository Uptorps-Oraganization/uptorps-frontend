import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

/* eslint-disable @typescript-eslint/no-explicit-any */
type StatType = {
  title: string;
  amount: number;
  trend?: string;
  trendicon: any;
  overallcomment?: string;
};

const formatAmount = (amount: number) => {
  const formatter = new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
    currencySign: "accounting",
  });

  const formatted = formatter.format(amount);
  return formatted.replace(/[A-Z₵GHC¢$€£]+/gi, "₵ ");
};

export const RevenueStatCard = (props: StatType) => {
  const FieldIcon = props.trendicon;

  return (
    <>
      <Card>
        <CardHeader>
          <CardDescription>{props.title}</CardDescription>
          <CardTitle className="text-3xl font-semibold tabular-nums">{formatAmount(props.amount)}</CardTitle>
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
