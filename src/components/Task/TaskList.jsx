import TaskHead from "./TaskHead";
import TaskRow from "./TaskRow";

export default function TaskList({ tasks, onEdit, onDelete, onFavChange }) {
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <TaskHead></TaskHead>
        <tbody>
          {tasks.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onFavChange={onFavChange}
            ></TaskRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}
