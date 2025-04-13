
import React from "react";
import { TaskData } from "@/types";

interface GanttChartProps {
  tasks: TaskData[];
}

const GanttChart: React.FC<GanttChartProps> = ({ tasks }) => {
  return (
    <div className="flex-1 relative">
      <div className="absolute inset-0 grid grid-cols-7 border border-gray-500">
        {/* Grid columns */}
        {Array.from({ length: 7 }).map((_, index) => (
          <div 
            key={index} 
            className="border-r border-gray-500 h-full"
            style={{ gridColumn: index + 1 }}
          />
        ))}
      </div>

      {/* Task bars */}
      <div className="relative">
        {tasks.map((task, index) => (
          <div 
            key={index} 
            className="h-16 relative" 
          >
            <div 
              className="absolute h-10 rounded-full my-3"
              style={{ 
                left: `${((task.start - 1) / 7) * 100}%`, 
                width: `${((task.end - task.start + 1) / 7) * 100}%`,
                backgroundColor: task.bgColor
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GanttChart;
