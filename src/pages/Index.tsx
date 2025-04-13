
import GanttChart from "@/components/GanttChart";
import WeekHeader from "@/components/WeekHeader";
import TaskList from "@/components/TaskList";
import TodayMarker from "@/components/TodayMarker";
import { tasks } from "@/data/tasks";

const Index = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#282c34] text-white px-4 py-8">
      <div className="w-full max-w-6xl">
        <div className="flex">
          <div className="w-[150px]"></div>
          <WeekHeader />
        </div>
        
        <div className="flex relative">
          <TaskList />
          <GanttChart tasks={tasks} />
          <TodayMarker />
        </div>
        
        <div className="mt-20 text-center">
          <div className="flex justify-center space-x-2 items-center mb-4">
            <div className="w-[180px] h-[1px] bg-white/30"></div>
            <h2 className="text-3xl font-light text-white">How to Use a</h2>
            <div className="w-[180px] h-[1px] bg-white/30"></div>
          </div>
          
          <h1 className="text-6xl font-bold mb-4">Gantt Chart for Project Management</h1>
          <p className="text-3xl font-light mb-8">[With Examples]</p>
          
          <div className="flex justify-center items-center">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
            <span className="ml-2 text-xl">VENNGAGE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
