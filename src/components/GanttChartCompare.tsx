
import React from "react";
import { Compare } from "@/components/ui/compare";
import WeekHeader from "@/components/WeekHeader";
import TaskList from "@/components/TaskList";
import GanttChart from "@/components/GanttChart";
import { tasks } from "@/data/tasks";
import { fasterTasks } from "@/data/fasterTasks";
import { useTheme } from "@/hooks/useTheme";

const GanttChartCompare: React.FC = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  // Before Automation (Original Timeline)
  const beforeAutomation = (
    <div className="flex flex-col h-full">
      <div className="flex">
        <div className="w-[150px]"></div>
        <WeekHeader />
      </div>
      <div className="flex flex-1">
        <TaskList isOriginal={true} />
        <GanttChart tasks={tasks} />
      </div>
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-gray-800 bg-opacity-75 text-white px-4 py-1 rounded-full z-30">
        Before Automation
      </div>
    </div>
  );

  // After Automation (Faster Timeline)
  const afterAutomation = (
    <div className="flex flex-col h-full">
      <div className="flex">
        <div className="w-[150px]"></div>
        <WeekHeader />
      </div>
      <div className="flex flex-1">
        <TaskList isOriginal={false} />
        <GanttChart tasks={fasterTasks} />
      </div>
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-blue-600 bg-opacity-75 text-white px-4 py-1 rounded-full z-30">
        After Automation
      </div>
    </div>
  );

  return (
    <div className="w-full h-[500px] my-8">
      <Compare
        className="w-full h-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
        initialSliderPercentage={50}
        slideMode="drag"
        firstComponent={beforeAutomation}
        secondComponent={afterAutomation}
        showHandlebar={true}
        autoplay={true}
        autoplayDuration={3000}
      />
    </div>
  );
};

export default GanttChartCompare;
