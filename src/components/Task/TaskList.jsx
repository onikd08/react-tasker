import TaskHead from "./TaskHead";
import TaskRow from "./TaskRow";

export default function TaskList() {
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <TaskHead></TaskHead>
        <tbody>
          <TaskRow></TaskRow>
        </tbody>
      </table>
    </div>
  );
}
