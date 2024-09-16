import React from 'react';
import locsymbol from "../assets/marker.svg";

const buyers = [
  { name: 'Global Grocers', type: 'Wholesale Buyer', location: 'Mumbai, Maharashtra' },
  { name: 'FreshMart', type: 'Retail Buyer', location: 'Delhi, Delhi' },
  { name: 'Agro Traders', type: 'Export Buyer', location: 'Chennai, Tamil Nadu' },
  { name: 'Farm Fresh', type: 'Local Buyer', location: 'Bangalore, Karnataka' },
];

const BuyerCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {buyers.map((buyer) => (
        <div
          key={buyer.name}
          className="max-w-sm rounded overflow-hidden shadow-lg m-4 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
        >
          <div className="bg-gray-200 h-48 flex items-center justify-center">
            <div className="bg-gray-400 rounded-full w-24 h-24 flex items-center justify-center">
              <span className="text-white text-2xl">Buyer</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <h3 className="text-lg font-bold text-black mb-1">{buyer.name}</h3>
            <a href="#" className="text-blue-600 underline mb">
              View Full Profile
            </a>
            <p className="text-green-600 mt-2 mb-3">{buyer.type}</p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-700">
                <img src={locsymbol} alt="Location" className="size-6" />
              </span>
              <span className="text-gray-700">{buyer.location}</span>
            </div>
            <div className="flex items-center justify-center gap-4 w-full">
              <button className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Chat
              </button>
              <button className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Call
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuyerCard;
