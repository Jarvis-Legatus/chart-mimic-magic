
import GanttChart from "@/components/GanttChart";
import WeekHeader from "@/components/WeekHeader";
import TaskList from "@/components/TaskList";
import ThemeToggle from "@/components/ThemeToggle";
import { tasks } from "@/data/tasks";
import { fasterTasks } from "@/data/fasterTasks";
import { useTheme } from "@/hooks/useTheme";

const Index = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <div className={`flex flex-col items-center min-h-screen ${
      isDarkTheme ? 'bg-[#282c34] text-white' : 'bg-gray-50 text-gray-800'
    } px-4 py-8 transition-colors duration-200`}>
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Gantt Chart</h1>
          <ThemeToggle />
        </div>
        
        <h2 className="text-2xl font-bold mb-6 text-center">Original Timeline</h2>
        <div className="flex">
          <div className="w-[150px]"></div>
          <WeekHeader />
        </div>
        
        <div className="flex relative">
          <TaskList isOriginal={true} />
          <GanttChart tasks={tasks} />
        </div>
        
        <h2 className="text-2xl font-bold mt-16 mb-6 text-center">Faster Timeline</h2>
        <div className="flex">
          <div className="w-[150px]"></div>
          <WeekHeader />
        </div>
        
        <div className="flex relative">
          <TaskList isOriginal={false} />
          <GanttChart tasks={fasterTasks} />
        </div>
      </div>
    </div>
  );
};

export default Index;
