import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const [tasks, setTasks] = useState([
    {
      id: crypto.randomUUID(),
      title: "Integration API",
      description:
        "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
      tags: ["Web", "Python", "API"],
      priority: "High",
      isFavorite: false,
    },
  ]);

  const handleAddTask = () => {
    console.log("Adding a task");
  };

  return (
    <section className="mb-20" id="tasks">
      <div className="container mx-auto">
        <SearchTask></SearchTask>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddTaskClick={handleAddTask}></TaskActions>
          <TaskList tasks={tasks}></TaskList>
        </div>
      </div>
    </section>
  );
}
