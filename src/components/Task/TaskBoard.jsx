import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

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
    {
      id: crypto.randomUUID(),
      title: "Complete Project Proposal",
      description:
        "Draft and finalize the project proposal for client presentation.",
      tags: ["work", "project"],
      priority: "High",
      isFavorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Grocery Shopping",
      description:
        "Buy groceries for the week, including fruits, vegetables, and household items.",
      tags: ["personal", "shopping"],
      priority: "High",
      isFavorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Exercise Routine",
      description:
        "Follow the workout routine for today, focusing on cardio and strength training.",
      tags: ["personal", "health"],
      priority: "High",
      isFavorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Read Chapter 5",
      description:
        "Read and summarize chapter 5 of the book for the upcoming book club meeting.",
      tags: ["personal", "reading"],
      priority: "High",
      isFavorite: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Prepare for Meeting",
      description:
        "Review agenda and gather necessary documents for the team meeting tomorrow.",
      tags: ["work", "meeting"],
      priority: "High",
      isFavorite: false,
    },
  ]);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleCloseModal = () => {
    setShowTaskModal(false);
    setTaskToEdit(null);
  };

  const handleSearch = (searchTerm) => {
    const foundTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTasks([...foundTasks]);
  };

  const handleFavorite = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isFavorite: !task.isFavorite };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  const handleSaveTask = (newTask, isAddTask) => {
    if (isAddTask) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          } else {
            return task;
          }
        })
      );
    }
    setShowTaskModal(false);
    setTaskToEdit(null);
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setShowTaskModal(true);
  };

  const handleDeleteTask = (taskId) => {
    const remainingTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(remainingTasks);
  };

  const handleDeleteAll = () => {
    setTasks([]);
  };
  return (
    <section className="mb-20" id="tasks">
      {console.log(tasks)}
      <div className="container mx-auto">
        {showTaskModal && (
          <AddTaskModal
            onCloseModal={handleCloseModal}
            onTaskSubmit={handleSaveTask}
            taskToEdit={taskToEdit}
          ></AddTaskModal>
        )}
        <SearchTask onSearch={handleSearch}></SearchTask>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            onAddTaskClick={() => setShowTaskModal(true)}
            onDeleteAllClick={handleDeleteAll}
          ></TaskActions>
          <TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onFavChange={handleFavorite}
          ></TaskList>
        </div>
      </div>
    </section>
  );
}
