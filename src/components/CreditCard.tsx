import React from "react";
import darkChip from "../assets/Chip_Card_bl.png";
import lightChip from "../assets/Chip_Card_wh.png";
import darkMC from "../assets/mc-dark.png";
import lightMC from "../assets/mc-light.png";

interface CreditCardDetails {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
  balance: number;
}

interface CreditCardProps {
  details: CreditCardDetails;
  type: "black" | "white";
}
interface CardInfoProps {
  label: string;
  value: string | number;
  cardType: "black" | "white";
}
const CardInfo = (props: CardInfoProps) => {
  const textColor =
    props.cardType === "black" ? "text-white" : "text-soar-dark-blue";
  const labelColor =
    props.cardType === "black"
      ? "text-white opacity-70"
      : "text-soar-light-blue";
  const valueSize = props.label === "Balance" ? "text-[20px]" : "text-[15px]";
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(props.value);
  const formatedValue =
    props.label === "Balance" ? formattedAmount : props.value;

  return (
    <div className={`p-2 ${textColor}`}>
      <p className={`font-normal ${labelColor} text-[12px]`}>{props.label}</p>
      <p className={`${textColor} font-semibold ${valueSize}`}>
        {formatedValue}
      </p>
    </div>
  );
};

const CreditCard: React.FC<CreditCardProps> = ({ details, type }) => {
  const textColor = type === "black" ? "text-white" : "text-soar-dark-blue";
  const bgColor = type === "black" ? "card-gradient" : "bg-white";
  const borderTop = type === "black" ? "" : "border-t-1 border-soar-gray-2";
  const border = type === "black" ? "" : "border-t-1 border-soar-gray-2";
  const mcLogo = type === "black" ? lightMC : darkMC;
  const chip = type === "black" ? lightChip : darkChip;

  return (
    <div
      className={`shrink-0 flex flex-col ${bgColor} ${border} rounded-4xl p-6 pb-0 w-80 h-[235px] justify-between ${textColor} font-lato relative`}
    >
      <div className="flex justify-between">
        <div className="balance text-sm">
          <CardInfo
            label={"Balance"}
            value={details.balance.toFixed(2)}
            cardType={type}
          />
        </div>
        <img src={chip} alt={"card chip"} className="self-start w-[34px]" />
      </div>

      <div className="flex gap-2">
        <div className="card-holder text-sm w-1/2">
          <CardInfo
            label={"CARD HOLDER"}
            value={details.cardHolder}
            cardType={type}
          />
        </div>
        <div className="expiry-date text-sm w-1/2">
          <CardInfo
            label={"VALID THRU"}
            value={details.expiryDate}
            cardType={type}
          />
        </div>
      </div>
      <div
        className={`card-bottom flex justify-between ${borderTop} items-center`}
      >
        <div className="card-number text-lg tracking-widest">
          {details.cardNumber.replace(/\d{4}(?= \d{4})/g, "****")}
        </div>
        <img src={mcLogo} alt={"mc logo"} className="w-[34px]" />
      </div>
    </div>
  );
};

export default CreditCard;
