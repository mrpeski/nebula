import React, { useState } from "react";
import livia from "../assets/lavia.png";
import randy from "../assets/randy.png";
import workman from "../assets/workman.png";
import sendIcon from "../assets/send.svg";
import nextIcon from "../assets/next-iconn.svg";

interface Favorite {
  name: string;
  position: string;
  photo: string;
}

interface FavButtonProps extends Favorite {
  isActive: boolean;
  onClick: () => void;
}

const mockAvatars = [livia, randy, workman];

const FavoriteButton: React.FC<FavButtonProps> = ({
  name,
  position,
  photo,
  isActive,
  onClick,
}) => (
  <button
    className="text-center flex flex-col items-center hover:bg-gray-100 active:bg-gray-200 p-1 focus:outline-none rounded-2xl"
    onClick={onClick}
  >
    <img src={photo} alt={name} className="size-[70px]" />
    <div className="w-[100px] flex flex-col items-center">
      <p
        className={`${isActive ? "font-extrabold" : ""} m-0 text-soar-black whitespace-nowrap overflow-hidden text-ellipsis w-[90%]`}
      >
        {name}
      </p>
      <p
        className={`${isActive ? "font-extrabold" : ""} m-0 text-soar-light-blue whitespace-nowrap overflow-hidden text-ellipsis w-[90%]`}
      >
        {position}
      </p>
    </div>
  </button>
);
const QuickTransfer: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const favoriteList: Favorite[] = [
    {
      name: "Livia Bator",
      position: "CEO",
      photo: "https://via.placeholder.com/150",
    },
    {
      name: "Randy Press",
      position: "Director",
      photo: "https://via.placeholder.com/150",
    },
    {
      name: "Alice Johnson",
      position: "UX Designer",
      photo: "https://via.placeholder.com/150",
    },
    {
      name: "Bob Brown",
      position: "Data Scientist",
      photo: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-2 pb-9 sm:p-4 bg-white sm:rounded-4xl h-[214px] sm:h-[276px]">
      <div className="flex items-center">
        <ul className="flex gap-2 overflow-auto mb-7">
          {favoriteList.map((favorite, index) => (
            <li key={index}>
              <FavoriteButton
                {...favorite}
                isActive={activeIndex === index}
                photo={mockAvatars[index % 3]}
                onClick={() => setActiveIndex(index)}
              />
            </li>
          ))}
        </ul>
        <button className="bg-white mx-4 flex items-center justify-center rounded-full next-shadow h-[50px] w-[50px] shrink-0">
          <img src={nextIcon} alt="Next" className="w-[6.5px]" />
        </button>
      </div>
      <form className="flex items-center gap-4 justify-between">
        <label className="flex-1 text-soar-light-blue" htmlFor="amount">
          Write Amount
        </label>
        <div className="flex  items-center justify-between gap-2 rounded-full bg-soar-gray-2 focus:outline-none focus:ring-0 focus:ring-soar-black ">
          <input
            type="text"
            placeholder="Enter amount"
            className="rounded-full w-[140px] p-2 pl-8 focus:outline-none focus:ring-0 text-soar-light-blue"
            id="amount"
          />
          <button
            type="submit"
            className="flex gap-3 bg-soar-black text-white rounded-full px-4 py-4 hover:opacity-90 focus:outline-none"
          >
            <span>Send</span>
            <img src={sendIcon} className="w-[26px]" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuickTransfer;
