import { CartesianGrid, Dot, LabelList, Line, LineChart } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { TrendingUp } from "@animateicons/react/lucide";

const chartData = [
  { month: "january", revenue: 1375, fill: "var(--color-green-300)" },
  { month: "february", revenue: 2200, fill: "var(--color-green-400)" },
  { month: "march", revenue: 1587, fill: "var(--color-green-500)" },
  { month: "april", revenue: 1773, fill: "var(--color-green-600)" },
  { month: "may", revenue: 2490, fill: "var(--color-green-700)" },
  { month: "june", revenue: 6790, fill: "var(--color-green-800)" },
];

const chartConfig = {
  revenue: {
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function RevenueStatCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Revenue</CardTitle>
        <CardDescription>Revenue generated over the last 6 months</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-45 w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 24,
              left: 24,
              right: 24,
            }}
          >
            <CartesianGrid horizontal vertical />

            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />

            <Line
              dataKey="revenue"
              type="linear"
              stroke="var(--color-revenue)"
              strokeWidth={3}
              dot={({ payload, ...props }) => {
                return <Dot key={payload.month} r={5} cx={props.cx} cy={props.cy} fill={payload.fill} stroke={payload.fill} />;
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground font-semibold"
                fontSize={13}
                dataKey="month"
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="size-4" />
        </div>
        <div className="leading-none text-muted-foreground">Showing revenue for the last 6 months</div>
      </CardFooter>
    </Card>
  );
}
