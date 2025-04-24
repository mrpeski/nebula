import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    amt: 2400,
  },
  {
    name: "Feb",
    amt: 2800,
  },
  {
    name: "Mar",
    amt: 2000,
  },
  {
    name: "Apr",
    amt: 3000,
  },
  {
    name: "May",
    amt: 1500,
  },
  {
    name: "Jun",
    amt: 3500,
  },
  {
    name: "Jul",
    amt: 1800,
  },
];

const BalanceHistoryChart = () => {
  return (
    <div className="p-2 sm:p-4 sm:py-7 bg-white sm:rounded-4xl h-[214px] sm:h-[276px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
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
