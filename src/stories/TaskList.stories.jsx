import TaskList from "../components/TaskList";
import TaskProvider from "../context/TaskProvider";

export default {
  title: "Component/TaskList",
  component: TaskList,
};

export const Default = () => {
  return (
    <TaskProvider>
      <TaskList />
    </TaskProvider>
  );
};
