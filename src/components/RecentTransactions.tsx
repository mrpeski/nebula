import React from "react";
import paypalIcon from "../assets/paypal.svg";
import cardIcon from "../assets/card.svg";
import dollarGreeenIcon from "../assets/dollar-green.svg";
import { classNames } from "../navConfig";

interface Transaction {
  id: string;
  date: string;
  amount: number;
  description: string;
  type: string;
  source: string;
}

const Transaction: React.FC<Transaction> = (props) => {
  const icons = {
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
  const transactions: Transaction[] = [
    {
      id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      description: "Deposit from my",
      amount: -850,
      date: "2021-01-28",
      type: "withdrawal",
      source: "bank",
    },
    {
      id: "7b3fc290-bc77-4f7d-9df3-d8b196c4a105",
      description: "Deposit Paypal",
      amount: 2500,
      date: "2021-01-25",
      type: "deposit",
      source: "paypal",
    },
    {
      id: "9e59bd56-2b0f-49b9-a2ce-b602b6d2f434",
      description: "Jemi Wilson",
      amount: 5400,
      date: "2021-01-21",
      type: "deposit",
      source: "bank",
    },
    {
      id: "c6e51a52-a0f3-4b2d-b84c-e98f4c3b611e",
      description: "Monthly Rent",
      amount: -1200,
      date: "2021-01-20",
      type: "withdrawal",
      source: "bank",
    },
    {
      id: "e8b6d435-a89f-49d1-945a-8e4b2d4579c1",
      description: "Client Payment",
      amount: 3200,
      date: "2021-01-18",
      type: "deposit",
      source: "bank",
    },
    {
      id: "f2d72b31-4c59-4860-9d45-3e80cc79d0aa",
      description: "Grocery Shopping",
      amount: -125,
      date: "2021-01-17",
      type: "withdrawal",
      source: "bank",
    },
    {
      id: "d8a7b21c-e9f0-4b17-a934-8d2c1c2b7a6d",
      description: "Freelance Work",
      amount: 1750,
      date: "2021-01-15",
      type: "deposit",
      source: "paypal",
    },
    {
      id: "a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d",
      description: "Utility Bill",
      amount: -95,
      date: "2021-01-14",
      type: "withdrawal",
      source: "bank",
    },
    {
      id: "b3c4d5e6-f7a8-5b6c-9d0e-1f2a3b4c5d6e",
      description: "Online Store Refund",
      amount: 75,
      date: "2021-01-12",
      type: "deposit",
      source: "paypal",
    },
    {
      id: "c4d5e6f7-a8b9-6c7d-0e1f-2a3b4c5d6e7f",
      description: "Restaurant Dinner",
      amount: -68,
      date: "2021-01-11",
      type: "withdrawal",
      source: "bank",
    },
    {
      id: "d5e6f7a8-b9c0-7d8e-1f2a-3b4c5d6e7f8a",
      description: "Salary Deposit",
      amount: 4300,
      date: "2021-01-10",
      type: "deposit",
      source: "bank",
    },
    {
      id: "e6f7a8b9-c0d1-8e9f-2a3b-4c5d6e7f8a9b",
      description: "Car Insurance",
      amount: -120,
      date: "2021-01-09",
      type: "withdrawal",
      source: "bank",
    },
    {
      id: "f7a8b9c0-d1e2-9f0a-3b4c-5d6e7f8a9b0c",
      description: "eBay Sale",
      amount: 340,
      date: "2021-01-08",
      type: "deposit",
      source: "paypal",
    },
    {
      id: "a8b9c0d1-e2f3-0a1b-4c5d-6e7f8a9b0c1d",
      description: "Mobile Phone Bill",
      amount: -45,
      date: "2021-01-07",
      type: "withdrawal",
      source: "bank",
    },
    {
      id: "b9c0d1e2-f3a4-1b2c-5d6e-7f8a9b0c1d2e",
      description: "Consulting Fee",
      amount: 1200,
      date: "2021-01-06",
      type: "deposit",
      source: "bank",
    },
    {
      id: "c0d1e2f3-a4b5-2c3d-6e7f-8a9b0c1d2e3f",
      description: "Amazon Purchase",
      amount: -87,
      date: "2021-01-05",
      type: "withdrawal",
      source: "bank",
    },
    {
      id: "d1e2f3a4-b5c6-3d4e-7f8a-9b0c1d2e3f4a",
      description: "Website Project",
      amount: 950,
      date: "2021-01-04",
      type: "deposit",
      source: "paypal",
    },
    {
      id: "e2f3a4b5-c6d7-4e5f-8a9b-0c1d2e3f4a5b",
      description: "Gym Membership",
      amount: -60,
      date: "2021-01-03",
      type: "withdrawal",
      source: "bank",
    },
    {
      id: "f3a4b5c6-d7e8-5f6a-9b0c-1d2e3f4a5b6c",
      description: "Tax Refund",
      amount: 750,
      date: "2021-01-02",
      type: "deposit",
      source: "bank",
    },
    {
      id: "a4b5c6d7-e8f9-6a7b-0c1d-2e3f4a5b6c7d",
      description: "New Year Dinner",
      amount: -110,
      date: "2021-01-01",
      type: "withdrawal",
      source: "bank",
    },
  ];

  return (
    <div className="p-2 sm:p-4 bg-white sm:rounded-4xl h-[214px] sm:h-[235px]">
      <div className="flex flex-col gap-3 overflow-y-auto h-[162px] sm:h-[200px] sm:rounded-3xl">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
