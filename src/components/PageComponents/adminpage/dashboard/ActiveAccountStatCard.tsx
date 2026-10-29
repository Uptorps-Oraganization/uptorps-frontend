import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { TrendingUp } from "@animateicons/react/lucide";

export const description = "A radial chart with stacked sections";

const chartData = [{ activeAccounts: 9370, inactiveAccounts: 975 }];

const chartConfig = {
  activeAccounts: {
    label: "activeAccounts",
    color: "var(--color-green-400)",
  },
  inactiveAccounts: {
    label: "inactiveAccounts",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ActiveAccountStatCard() {
  const totalVisitors = chartData[0].activeAccounts + chartData[0].inactiveAccounts;

  return (
    <Card className="flex flex-col">
      <CardHeader className="border-b">
        <CardTitle>Active Accounts</CardTitle>
        <CardDescription>Total Accounts: 10,345</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square w-full max-w-62.5 max-h-45">
          <RadialBarChart data={chartData} endAngle={180} innerRadius={80} outerRadius={120} cy="70%">
            <RadialBar dataKey="inactiveAccounts" stackId="a" fill="var(--color-inactiveAccounts)" className="stroke-transparent stroke-2" />
            <RadialBar dataKey="activeAccounts" stackId="a" fill="var(--color-activeAccounts)" className="stroke-transparent stroke-2" />

            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" hideLabel />} />

            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) - 16} className="tabular-nums fill-foreground text-2xl font-bold">
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 4} className="fill-muted-foreground">
                          Total Accounts
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 2.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">Showing overall active accounts</div>
      </CardFooter>
    </Card>
  );
}
