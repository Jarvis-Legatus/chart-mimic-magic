
import GanttChartCompare from "@/components/GanttChartCompare";
import ThemeToggle from "@/components/ThemeToggle";
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
        
        <p className="text-center mb-8">
          Compare project timelines before and after automation using the slider below.
          Drag the divider to compare both timelines.
        </p>
        
        <GanttChartCompare />
      </div>
    </div>
  );
};

export default Index;
