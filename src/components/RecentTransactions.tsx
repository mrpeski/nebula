import React from "react";
import paypalIcon from "../assets/paypal.svg";
import cardIcon from "../assets/card.svg";
import dollarGreeenIcon from "../assets/dollar-green.svg";
import { classNames } from "../navConfig";
import { useGetRecentTransactionsQuery } from "../apiSlice";

interface Transaction {
  id: string;
  date: string;
  amount: number;
  description: string;
  type: string;
  source: string;
}

const Transaction: React.FC<Transaction> = (props) => {
  const icons: Record<string, any> = {
    paypal: paypalIcon,
    card: cardIcon,
    bank: dollarGreeenIcon,
  };
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(props.amount);

  return (
    <div className="flex gap-2 justify-between items-center">
      <div className="flex gap-4 items-center">
        <img
          className="size-[50px] sm:size-[55px]"
          src={icons[props.source]}
          alt={props.source}
        />
        <div className="font-medium">
          <p className="font-medium text-[14px] sm:text-[16px] text-soar-black">
            {props.description}
          </p>
          <p className="text-[12px] sm:text-[14px] text-soar-light-blue">
            {new Date(props.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
      <p
        className={classNames(
          props.type === "deposit" ? "text-soar-green" : "text-soar-red",
          "text-[14px] sm:text-[16px]",
        )}
      >
        {formattedAmount}
      </p>
    </div>
  );
};

const RecentTransactions: React.FC = () => {
  const {
    data: transactions,
    error,
    isLoading,
  } = useGetRecentTransactionsQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className="p-2 sm:p-4 bg-white sm:rounded-4xl h-[214px] sm:h-[235px]">
      <div className="flex flex-col gap-3 overflow-y-auto h-[162px] sm:h-[200px] sm:rounded-3xl">
        {transactions?.data?.map((transaction: Transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
