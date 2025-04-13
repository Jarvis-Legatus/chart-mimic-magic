
import React from "react";

const TodayMarker: React.FC = () => {
  // Position at week 2 and a bit (about 2.5)
  const position = (2.5 / 7) * 100;
  
  return (
    <div 
      className="absolute top-full flex flex-col items-center"
      style={{ left: `${position}%` }}
    >
      <div className="h-[485px] w-[2px] bg-gray-300 absolute bottom-[30px]"></div>
      <div className="bg-gray-300 text-gray-800 px-6 py-1 rounded-full mt-2 font-medium">
        Today
      </div>
    </div>
  );
};

export default TodayMarker;
