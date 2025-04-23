import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Bill Expense", value: 54 },
  { name: "Others", value: 126 },
  { name: "Investment", value: 72 },
  { name: "Entertainment", value: 108 },
];

const COLORS = ["#FC7900", "#232323", "#396AFF", "#343C6A"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <>
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontWeight={700}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      <text
        x={x + (x > cx ? -25 : 20)}
        y={y + 20}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={12}
        fontWeight={700}
      >
        {`${data[index].name}`}
      </text>
    </>
  );
};

const ExpenseStatisticsChart = () => {
  return (
    <div className="p-2 sm:p-4 bg-white sm:rounded-4xl h-[214px] sm:h-[322px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseStatisticsChart;
