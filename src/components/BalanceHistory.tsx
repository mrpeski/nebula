import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useGetChartsQuery } from "../apiSlice";

const BalanceHistoryChart = () => {
  const { data: chartsData, error, isLoading } = useGetChartsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-2 sm:p-4 sm:py-7 bg-white sm:rounded-4xl h-[214px] sm:h-[276px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={chartsData.data.balanceHistory}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2D60FF" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#2D60FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#DFE5EE" />
          <XAxis
            dataKey="name"
            tick={{ fill: "#718EBF" }}
            axisLine={{ stroke: "#718EBF" }}
            fontSize={13}
          />
          <YAxis
            color="#718EBF"
            tick={{ fill: "#718EBF" }}
            fontSize={13}
            axisLine={{ stroke: "#718EBF" }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="amt"
            stroke="#1814F3"
            strokeWidth={3}
            fill="url(#colorAmt)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceHistoryChart;
