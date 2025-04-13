
import React from "react";
import { tasks } from "@/data/tasks";

const TaskList: React.FC = () => {
  return (
    <div className="w-[150px] pr-4">
      {tasks.map((task, index) => (
        <div 
          key={index} 
          className="h-16 flex items-center justify-end"
        >
          <span className={`text-${task.textColor}`}>
            {task.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
