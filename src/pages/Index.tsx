
import GanttChart from "@/components/GanttChart";
import WeekHeader from "@/components/WeekHeader";
import TaskList from "@/components/TaskList";
import { tasks } from "@/data/tasks";
import { fasterTasks } from "@/data/fasterTasks";

const Index = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#282c34] text-white px-4 py-8">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Original Timeline</h2>
        <div className="flex">
          <div className="w-[150px]"></div>
          <WeekHeader />
        </div>
        
        <div className="flex relative">
          <TaskList />
          <GanttChart tasks={tasks} />
        </div>
        
        <h2 className="text-2xl font-bold mt-16 mb-6 text-center">Faster Timeline</h2>
        <div className="flex">
          <div className="w-[150px]"></div>
          <WeekHeader />
        </div>
        
        <div className="flex relative">
          <TaskList />
          <GanttChart tasks={fasterTasks} />
        </div>
      </div>
    </div>
  );
};

export default Index;
