import React from "react";
import { FaPenFancy, FaBox, FaGetPocket } from "react-icons/fa";
import CardRow from "./CardRow";

const HomeCard = () => {
  const cards = [
    {
      id: "01",
      step: "STEP 1",
      ICON: FaPenFancy,
      title1: "design and",
      title2: "drawings",
      des: "The first step in turning your dream into a physical product is the design phase.",
    },
    {
      id: "02",
      step: "STEP 2",
      ICON: FaBox,
      title1: "simple",
      title2: "production",
      des: "We move on to making a physical product that you can hold and test.",
    },
    {
      id: "03",
      step: "STEP 3",
      ICON: FaGetPocket,
      title1: "quantity ",
      title2: "production",
      des: "Once you’ve approved your sample product,we move onto final production. ",
    },
  ];

  return (
    <div className="w-full py-10 ">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:px-10 px-10 bg-base-100 my-10">
        {cards.map((card) => {
          return <CardRow key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
};

export default HomeCard;