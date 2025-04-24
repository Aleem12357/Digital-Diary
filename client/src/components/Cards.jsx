import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({ bgColor, cardData }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-24">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="group border border-gray-300 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-transform transform hover:scale-105"
          onClick={() => navigate(`/student/subject${card.path}`, {
            state: { cardName: card.title }
          })}

        >
          <div
            style={{ backgroundColor: bgColor }}
            className="text-white text-center p-2 rounded-t-md"
          >
            <h3 className="text-lg">{card.title}</h3>
          </div>
          <div className="p-4 text-gray-700">
            <p className="inline-block border-b border-gray-400 transition-all duration-200 group-hover:border-b-0">
              {card.text}
            </p>

          </div>
        </div>

      ))}
    </div>
  );
};

export default Cards;
