import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({ bgColor, cardData }) => {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
            {cardData.map((card, index) => (
                <div
                    key={index}
                    className="border border-gray-300 rounded-md shadow-md cursor-pointer hover:shadow-lg transition-transform transform hover:scale-105"
                    onClick={() => navigate(card.path, { state: { cardName: card.title } })}
                >
                    <div style={{ backgroundColor: bgColor }} className="text-white text-center p-3 rounded-t-md">
                        <h3 className="text-lg font-semibold">{card.title}</h3>
                    </div>
                    <div className="p-4 text-gray-700">
                        <p>{card.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
