import React from "react";
import CreditCard from "./CreditCard";
import { useGetCardsQuery } from "../apiSlice";
import SectionTitle from "./SectionTitle";

type CreditCardType = "black" | "white";

const CreditCardList: React.FC = () => {
  const { data: cards, error, isLoading } = useGetCardsQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <section>
      <div className="flex justify-between items-baseline">
        <SectionTitle title="My Cards" />
        <button className="text-[17px] font-semibold text-soar-dark-blue">
          See All
        </button>
      </div>
      <div className="w-full">
        <div className="w-full flex-wrap overflow-x-auto">
          <div className="w-full flex gap-6">
            {[cards?.data?.[0], cards?.data?.[1]].map(
              (card: any, index: number) => (
                <CreditCard
                  key={index}
                  details={card.details}
                  type={card.type as CreditCardType}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCardList;
