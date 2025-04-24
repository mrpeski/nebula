import React from "react";
import CreditCard from "./CreditCard";
import { useGetCardsQuery } from "../apiSlice";

type CreditCardType = "black" | "white";

const CreditCardList: React.FC = () => {
  const { data: cards, error, isLoading } = useGetCardsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full flex-wrap overflow-x-auto">
      <div className="w-full flex gap-4">
        {cards?.data?.map((card, index) => (
          <CreditCard
            key={index}
            details={card.details}
            type={card.type as CreditCardType}
          />
        ))}
      </div>
    </div>
  );
};

export default CreditCardList;
