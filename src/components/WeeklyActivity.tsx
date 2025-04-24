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

const data = [
  {
    name: "Sat",
    deposit: 4000,
    withdrawal: 2400,
    amt: 2400,
  },
  {
    name: "Sun",
    deposit: 3000,
    withdrawal: 1398,
    amt: 2210,
  },
  {
    name: "Mon",
    deposit: 2000,
    withdrawal: 9800,
    amt: 2290,
  },
  {
    name: "Tues",
    deposit: 2780,
    withdrawal: 3908,
    amt: 2000,
  },
  {
    name: "Wed",
    deposit: 1890,
    withdrawal: 4800,
    amt: 2181,
  },
  {
    name: "Thur",
    deposit: 2390,
    withdrawal: 3800,
    amt: 2500,
  },
  {
    name: "Fri",
    deposit: 3490,
    withdrawal: 4300,
    amt: 2100,
  },
];

const WeeklyActivity: React.FC = () => {
  return (
    <div className="p-2 sm:p-4 sm:py-7 bg-white sm:rounded-4xl h-[214px] sm:h-[322px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
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
