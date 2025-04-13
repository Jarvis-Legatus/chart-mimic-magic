
import { TaskData } from "@/types";
import { tasks } from "./tasks";

// Create faster tasks with adjusted start times and durations
export const fasterTasks: TaskData[] = (() => {
  const result: TaskData[] = [];
  let currentStart = 1; // Start from day 1
  
  // Process all tasks except Task F
  for (let i = 0; i < tasks.length - 1; i++) {
    const task = tasks[i];
    const originalDuration = task.end - task.start;
    const reductionFactor = 2 + Math.random() * 2; // Random between 2 and 4
    const newDuration = originalDuration / reductionFactor;
    
    // Create the new task with adjusted start and end times
    const newTask: TaskData = {
      ...task,
      start: currentStart,
      end: currentStart + newDuration,
      textColor: "blue-400",
      bgColor: "#3056D3"
    };
    
    result.push(newTask);
    
    // Update the start time for the next task
    currentStart = newTask.end;
  }
  
  // Handle Task F separately - it starts at day 3 and lasts as long as in the original timeline
  const originalTaskF = tasks[tasks.length - 1];
  const originalTaskFDuration = originalTaskF.end - originalTaskF.start;
  
  result.push({
    ...originalTaskF,
    start: 3,
    end: 3 + originalTaskFDuration,
    textColor: "blue-400",
    bgColor: "#3056D3"
  });
  
  return result;
})();
