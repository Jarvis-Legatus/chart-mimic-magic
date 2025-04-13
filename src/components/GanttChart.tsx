
import React from "react";
import { TaskData } from "@/types";
import { useTheme } from "@/hooks/useTheme";

interface GanttChartProps {
  tasks: TaskData[];
}

const GanttChart: React.FC<GanttChartProps> = ({ tasks }) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  
  return (
    <div className="flex-1 relative">
      <div className={`absolute inset-0 grid grid-cols-7 border ${isDarkTheme ? 'border-gray-500' : 'border-gray-300'}`}>
        {/* Grid columns */}
        {Array.from({ length: 7 }).map((_, index) => (
          <div 
            key={index} 
            className={`border-r ${isDarkTheme ? 'border-gray-500' : 'border-gray-300'} h-full`}
            style={{ gridColumn: index + 1 }}
          />
        ))}
      </div>

      {/* Task bars */}
      <div className="relative">
        {tasks.map((task, index) => {
          // Ensure task never exceeds the 7-day limit
          const endTime = Math.min(task.end, 7);
          
          return (
            <div 
              key={index} 
              className="h-16 relative" 
            >
              <div 
                className="absolute h-10 rounded my-3"
                style={{ 
                  left: `${((task.start - 1) / 7) * 100}%`, 
                  width: `${((endTime - task.start) / 7) * 100}%`,
                  backgroundColor: task.bgColor
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GanttChart;
