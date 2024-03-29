import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function AddTaskModal({
  onCloseModal,
  onTaskSubmit,
  taskToEdit,
}) {
  const [task, setTask] = useState(
    taskToEdit || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    }
  );

  const [isAddTask, setIsAddTask] = useState(Object.is(taskToEdit, null));

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskSubmit(task, isAddTask);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "tags") {
      value = value.split(",");
    }
    setTask({
      ...task,
      [name]: value,
    });
  };
  return (
    <div className="overflow-x-hidden bg-black bg-opacity-70 overflow-y-auto fixed flex md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center">
      <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
        <div className="shadow relative">
          <form
            onSubmit={handleSubmit}
            className="mx-auto my-10 w-full max-w-[740px]
       rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26]
        p-9 max-md:px-4 lg:my-20 lg:p-11"
          >
            <button
              onClick={onCloseModal}
              type="button"
              className="text-gray-400 text-xl absolute top-3 right-3 bg-transparent rounded-lg p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
            >
              <IoClose />
            </button>
            <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
              {isAddTask ? "Add a new task" : "Update Task"}
            </h2>

            <div className="space-y-9 text-white lg:space-y-10">
              <div className="space-y-2 lg:space-y-3">
                <label name="title">Title</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  value={task.title}
                  onChange={handleChange}
                  type="text"
                  name="title"
                  id="title"
                  required
                />
              </div>

              <div className="space-y-2 lg:space-y-3">
                <label name="description">Description</label>
                <textarea
                  className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                  type="text"
                  value={task.description}
                  onChange={handleChange}
                  name="description"
                  id="description"
                  required
                ></textarea>
              </div>

              <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
                <div className="space-y-2 lg:space-y-3">
                  <label name="tags">Tags</label>
                  <input
                    className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                    type="text"
                    name="tags"
                    value={task.tags}
                    onChange={handleChange}
                    id="tags"
                    required
                  />
                </div>

                <div className="space-y-2 lg:space-y-3">
                  <label name="priority">Priority</label>
                  <select
                    className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                    name="priority"
                    id="priority"
                    value={task.priority}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-16 flex justify-center lg:mt-20">
              <button
                type="submit"
                className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
              >
                {isAddTask ? "Create Task" : "Update Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
