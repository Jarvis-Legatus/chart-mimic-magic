
import React from "react";
import { tasks } from "@/data/tasks";
import { fasterTasks } from "@/data/fasterTasks";
import { useTheme } from "@/hooks/useTheme";

interface TaskListProps {
  isOriginal?: boolean;
}

const TaskList: React.FC<TaskListProps> = ({ isOriginal = true }) => {
  const taskList = isOriginal ? tasks : fasterTasks;
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <div className="w-[150px] pr-4">
      {taskList.map((task, index) => (
        <div 
          key={index} 
          className="h-16 flex items-center justify-end"
        >
          <span className={`${isDarkTheme ? `text-${task.textColor}` : 'text-gray-700'}`}>
            {task.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
