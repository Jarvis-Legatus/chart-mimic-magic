
import React from "react";

const WeekHeader: React.FC = () => {
  const weeks = [1, 2, 3, 4, 5, 6, 7];
  
  return (
    <div className="flex-1 grid grid-cols-7">
      {weeks.map((week) => (
        <div key={week} className="text-center py-2 text-gray-400 font-medium">
          Week {week}
        </div>
      ))}
    </div>
  );
};

export default WeekHeader;
