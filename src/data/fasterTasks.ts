
import { TaskData } from "@/types";
import { tasks } from "./tasks";

// Create faster tasks with adjusted start times and durations
export const fasterTasks: TaskData[] = (() => {
  const result: TaskData[] = [];
  let currentStart = 1; // Start from day 1
  
  tasks.forEach((task, index) => {
    const originalDuration = task.end - task.start;
    const reductionFactor = 2 + Math.random() * 2; // Random between 2 and 4
    const newDuration = originalDuration / reductionFactor;
    
    // Create the new task with adjusted start and end times
    const newTask: TaskData = {
      ...task,
      start: currentStart,
      end: Math.min(currentStart + newDuration, 7) // Ensure it doesn't go beyond day 7
    };
    
    result.push(newTask);
    
    // Update the start time for the next task
    currentStart = newTask.end;
  });
  
  return result;
})();
