
import React from "react";

const WeekHeader: React.FC = () => {
  const days = [1, 2, 3, 4, 5, 6, 7];
  
  return (
    <div className="flex-1 grid grid-cols-7">
      {days.map((day) => (
        <div key={day} className="text-center py-2 text-gray-400 font-medium">
          Day {day}
        </div>
      ))}
    </div>
  );
};

export default WeekHeader;
