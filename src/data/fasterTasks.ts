
import { TaskData } from "@/types";
import { tasks } from "./tasks";

// Create faster tasks by reducing duration by a random factor between 2 and 4
export const fasterTasks: TaskData[] = tasks.map(task => {
  const originalDuration = task.end - task.start;
  const reductionFactor = 2 + Math.random() * 2; // Random between 2 and 4
  const newDuration = originalDuration / reductionFactor;
  
  return {
    ...task,
    end: task.start + newDuration
  };
});
