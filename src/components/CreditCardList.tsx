import React from "react";
import CreditCard from "./CreditCard"; // Adjust the import path as necessary

const CreditCardList: React.FC = () => {
  const cards = [
    {
      details: {
        cardNumber: "1234 5678 9012 3456",
        cardHolder: "John Doe",
        expiryDate: "12/25",
        cvv: "123",
        balance: 5756,
      },
      type: "black",
    },
    {
      details: {
        cardNumber: "9876 5432 1098 7654",
        cardHolder: "Jane Smith",
        expiryDate: "11/24",
        cvv: "456",
        balance: 5756,
      },
      type: "white",
    },
    {
      details: {
        cardNumber: "1111 2222 3333 4444",
        cardHolder: "Alice Johnson",
        expiryDate: "10/23",
        cvv: "789",
        balance: 3000,
      },
      type: "black",
    },
    {
      details: {
        cardNumber: "5555 6666 7777 8888",
        cardHolder: "Bob Brown",
        expiryDate: "09/26",
        cvv: "012",
        balance: 4500,
      },
      type: "white",
    },
    {
      details: {
        cardNumber: "9999 0000 1111 2222",
        cardHolder: "Charlie Davis",
        expiryDate: "08/27",
        cvv: "345",
        balance: 6000,
      },
      type: "white",
    },
  ];

  return (
    <div className="w-full flex-wrap overflow-x-auto">
      <div className="w-full flex gap-4">
        {cards.map((card, index) => (
          <CreditCard key={index} details={card.details} type={card.type} />
        ))}
      </div>
    </div>
  );
};

export default CreditCardList;
