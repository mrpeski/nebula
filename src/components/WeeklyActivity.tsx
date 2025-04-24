import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useGetChartsQuery } from "../apiSlice";

const WeeklyActivity: React.FC = () => {
  const { data: chartsData, error, isLoading } = useGetChartsQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className="p-2 sm:p-4 sm:py-7 bg-white sm:rounded-4xl h-[214px] sm:h-[322px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={chartsData.data.weeklyActivity}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={15}
          barGap={12}
        >
          <Legend
            layout="horizontal"
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={15}
            margin={{ top: 0, bottom: 20 }}
            formatter={(value) => {
              const capitalizedValue =
                value.charAt(0).toUpperCase() + value.slice(1);
              return (
                <span
                  style={{
                    color: "#718EBF",
                    fontSize: 13,
                    display: "inline-block",
                    marginBottom: 16,
                  }}
                >
                  {capitalizedValue}
                </span>
              );
            }}
          />
          <CartesianGrid
            strokeDasharray="0"
            stroke="#F3F3F5"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tick={{ fill: "#718EBF" }}
            axisLine={false}
            tickLine={false}
            fontSize={13}
            tickMargin={10}
          />
          <YAxis
            color="#718EBF"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#718EBF" }}
            fontSize={13}
          />
          <Bar
            dataKey="withdrawal"
            isAnimationActive={false}
            fill="#232323"
            radius={[10, 10, 10, 10]}
          />
          <Bar
            dataKey="deposit"
            isAnimationActive={false}
            fill="#396AFF"
            radius={[10, 10, 10, 10]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyActivity;
